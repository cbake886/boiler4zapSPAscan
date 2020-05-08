import axios from "axios";
import Swal from 'sweetalert2'
import { useDispatch, batch } from 'react-redux'
import jwt from "jsonwebtoken";
import allActions from '../actions'
import config from "../config";

const instance = axios.create({
  baseURL: config.baseURLApi,
});

function alert(data) {
  Swal.fire({
    title: 'Error',
    text: data,
    icon: 'warning',
    showCancelButton: false,
    confirmButtonText: 'Ok',
  }).then((result) => {
    
  })
};

export default function useLoginHandler(history) {
  const dispatch = useDispatch();
  return {
    onLogin(login, password) {

      async function AsyncFunc(login, password) {
 
          dispatch(allActions.expAction.setLoading(true))
   
        return instance.post("/api/user/signin", { email: login, password: password })
      
      }
      AsyncFunc(login, password).then(res => {
        let user;
        const token = res.data.token;
        const expire = res.data.expire
        user = jwt.decode(token).user;
        delete user.id;
        batch(() => {
          dispatch(allActions.expAction.setAuth(true))
          dispatch(allActions.expAction.setExp(expire))
          dispatch(allActions.expAction.setUser(user))
          dispatch(allActions.expAction.setToken(token))
        })
        history.push('/app/dashboard')
      }).catch((error) => {
        console.log(error)
        dispatch(allActions.expAction.setLoading(false))
        alert('Invalid username or password. Please try again.');
      })
    },
    onLogout() {
      dispatch(allActions.expAction.setLoading(false))
      dispatch(allActions.expAction.setLogout())
      history.push("/login");
    },
  }
}
