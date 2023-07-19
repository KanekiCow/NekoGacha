import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { auth } from "./config/FireConfig";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { useEffect, useState } from "react";
import Gen from "./components/Gen";

interface User {
  id: string;
  name: string;
  // ...
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser: FirebaseUser | null) => {
        if (firebaseUser) {
          const user: User = {
            id: firebaseUser.uid,
            name: firebaseUser.displayName ?? "",
          };
          setUser(user);
        } else {
          setUser(null);
        }
      }
    );
    return () => unsubscribe();
  }, []);

  return <>{user ? <Gen /> : <HomeScreen />}</>;
}

export default App;
