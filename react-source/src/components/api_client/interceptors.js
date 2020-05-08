import axios from 'axios';
import Swal from 'sweetalert2'
import { withRouter } from "react-router-dom";
import { useDispatch } from 'react-redux'
import allActions from '../../actions'

export default withRouter({
    useSetupInterceptors: (history) => {
        const { onLogout } = useLogout(history);
        const CancelToken = axios.CancelToken;
        const { onExp } = useExp();

        axios.interceptors.request.use((config) => {
           // await persistor.flush();
            const testexp = onExp();
            if (testexp) {
                Swal.fire({
                    title: '401 - Authorization Failed',
                    text: 'Please return to the login page. Your token may have expired or you do not have the proper access.',
                    icon: 'warning',
                    showCancelButton: false,
                    confirmButtonText: 'Return',
                }).then((result) => {
                    onLogout();

                })
                return {
                    ...config,
                    cancelToken: new CancelToken((cancel) => cancel('Cancel repeated request'))
                };
            } else {
                return config;
            }
        }, error => { console.log(error) });

        axios.interceptors.response.use(response => {
            return response;
        }, error => {
            try {
                if (axios.isCancel(error)) {
                    return new Promise(() => { });
                }
                return Promise.reject(error);
            } catch (error) {
                console.log(error)
            }
        });
    },
});

function getExpire () {
    var localStore = localStorage.getItem("persist:root")
    if (localStore) {
       let store = JSON.parse(localStore)
       return JSON.parse(store.exp)
    } 
    return 0
   
}

function useExp() {
   // const currentExp = useSelector(state => state.exp)

    return {
        onExp() {
            //console.log("Current Status = ", 'Now: ' + Date.now(), 'Current: ' + getExpire().exp, 'Check: ', Date.now() > getExpire().exp)
            if (Date.now() > getExpire().exp) {
                return true
            } else { return false }
        },
    }
}

function useLogout(history) {
    const dispatch = useDispatch()

    return {
        onLogout() {
            dispatch(allActions.expAction.setLogout())
            history.push("/login");
            //persistor.flush();
        },
    }
}

