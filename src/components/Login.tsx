import {auth, provider} from "../config/FireConfig";
import { signInWithPopup } from "firebase/auth";

 export const LoginHandler = () =>{
 signInWithPopup(auth, provider).then((result) =>{
    console.log(result);
 })
 .catch((error) =>{
    console.log(error)
 })
}

const Login = () => {
  return (<button onClick={LoginHandler}>Login with Google</button>);
};


export default Login;