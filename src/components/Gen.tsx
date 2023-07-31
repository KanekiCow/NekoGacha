import SignOut from "./SignOut";
import { useEffect, useState } from "react";

type CatImage = {
  id: string;
  url: string;
};

const Gen = () => {
  const [data, setData] = useState<CatImage[]>([]);

  useEffect(() => {
    void fetchData();
  }, []);

  const handleNextButtonClick = () => {
    fetchData()
      .then(() => {
        console.log("requested");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=1&api_key="
      );
      const responseData = (await response.json()) as CatImage[];
      setData(responseData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  return (
    <>
      <SignOut />
      <div>
        {data.map((item) => (
          <div className="catContainer" key={item.id}>
            <div className="BtnContainer">
              <button onClick={handleNextButtonClick}>Next</button>
              <button
                onClick={() => {
                  window.open(item.url);
                }}
              >
                Save
              </button>
            </div>
            <div className="ImageContainer">
              <img src={item.url} alt="Cat" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gen;
