import {auth, provider} from "../config/FireConfig";
import { signInWithPopup, signInAnonymously } from "firebase/auth";

 export const LoginWithGoogleHandler = () => {
   signInWithPopup(auth, provider)
     .then((result) => {
       console.log(result);
     })
     .catch((error) => {
       console.log(error);
     });
 };
 export const LoginAnonymouslyHandler = () => {
   signInAnonymously(auth)
     .then((result) => {
       console.log(result);
     })
     .catch((error) => {
       console.log(error);
     });
 };

const Login = () => {
  return (<button onClick={LoginWithGoogleHandler}>Login with Google</button>);
};


export default Login;