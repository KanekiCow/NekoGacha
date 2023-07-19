import { LoginWithGoogleHandler, LoginAnonymouslyHandler } from "./Login";

const HomeScreen = () => {
  return (
    <>
      <div className="HomeContainer">
        <h1 className="Title">
          Welcome To <b className="Name">NekoGacha</b> 🐈‍⬛
        </h1>
        <h1 className="desc">Cute Cats 4 Life 💖</h1>
        <button onClick={LoginWithGoogleHandler} className="StartButton">
          Login To Get Started!
        </button>
        <p>or...</p>
        <button onClick={LoginAnonymouslyHandler} className="AnonymouslyBtn">
          Continue Without An Account!
        </button>
      </div>
    </>
  );
};

export default HomeScreen;
