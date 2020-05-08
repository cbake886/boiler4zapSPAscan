
import axios from "axios";
import Swal from 'sweetalert2'
import { useDispatch, batch } from 'react-redux'
import jwt from "jsonwebtoken";
import allActions from '../actions'
//import { persistor } from '../store';


function alert(data) {
  Swal.fire({
    title: 'Error',
    text: data,
    icon: 'warning',
    showCancelButton: false,
    confirmButtonText: 'Ok',
  }).then((result) => {
    axios.get(`/api/del`)
  })
};

export default function useLoginHandler(history) {
  console.log('i hit login')
  const dispatch = useDispatch();
 
  return {
    onLogin(login, password) {
      dispatch(allActions.expActions.setLoading(true))
      async function AsyncFunc(login, password) {
        try {
          let user;
          const response = await axios.post("/user/signin/local", { email: login, password }, { username: login, password: password })
          .then(res => {
            const token = res.data.token;
            const expire = res.data.expire
            user = jwt.decode(token).user;
            delete user.id;
            user = jwt.decode(token).user;
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            batch(() => {
            dispatch(allActions.expActions.setExp(expire))
            dispatch(allActions.expActions.setUser(user))
            dispatch(allActions.expActions.setToken(token))
            })
          })
          .catch(() => {
            setError(true);
            setIsLoading(false);
          })
          const uData = response.data.user
          const expData = response.data.exp
          dispatch(allActions.expAction.setExp(expData))
          // eslint-disable-next-line

        } catch (error) {
          console.log(error)
          alert('Invalid username or password. Please try again.');
        }
      }
      //persistor.purge();
      AsyncFunc(login, password).then(async () => {
        //await persistor.flush();
        history.push('/app/dashboard')
      }).catch((error) => {

        alert('Invalid username or password. Please try again.');
      })
    },
    onLogout() {
      dispatch(allActions.expActions.setLogout())
      document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      axios.get(`/api/del`)
      history.push("/login");
      window.localStorage.removeItem('persist:root');
    },
  }
}
