import { auth } from "../config/FireConfig";

const SignOuthandler = () => {
  auth.signOut().then(() => {
    console.log("LoggedOut successfully");
  })
  .catch((error) =>{
    console.error("SignOut error: ",error)
  })
};

const SignOut = () => {
  return <button onClick={SignOuthandler}>SignOut</button>;
};

export default SignOut;
