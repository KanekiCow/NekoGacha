import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { auth } from "./config/FireConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import Gen from "./components/Gen";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);


  return <>{user ? <Gen/>:<HomeScreen/> }</>;
}

export default App;
