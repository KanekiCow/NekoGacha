import { LoginHandler } from "./Login";

const HomeScreen = () => {
  return (
    <>
      <div className="HomeContainer">
        <h1 className="Title">
          Welcome To <b className="Name">NekoGacha</b> 🐈‍⬛
        </h1>
        <h1>Cute Cats 4 Life 💖</h1>
        <button onClick={LoginHandler} className="StartButton">Get Started!</button>
      </div>
    </>
  );
};

export default HomeScreen;
