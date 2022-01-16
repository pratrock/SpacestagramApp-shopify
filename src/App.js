import "./App.css";
import React, { useState, useEffect } from "react";
import { url, count, loading, loadButton } from "./constant";
import Cards from "./components/Card/Cards";

function App() {
  const [post, setPost] = useState([]);
  const [load, setLoad] = useState(true);

  const getData = async () => {
    const response = await fetch(
      `${url}${process.env.REACT_APP_API_KEY}&count=${count}`
    );
    const data = await response.json();
    return data;
  };
  const handleGetData = () => {
    setLoad(true);

    getData().then((post) => {
      let container = document.getElementById("nasa-container");
      let heading = document.getElementById("first-heading");
      container.classList.add("container");
      heading.classList.remove("hide-heading");

      setPost((curr) => [...curr, ...post]);
      setLoad(false);
    });
  };
  useEffect(() => {
    handleGetData();
  }, []);
  console.log(post);

  return (
    <div className="App">
      <h1 id="first-heading" className="heading hide-heading">
        Spacestagram
      </h1>
      <div id="nasa-container" className="container">
        {post.length > 0 &&
          post.map(
            (element) =>
              element.media_type === "image" && <Cards post={element} />
          )}
        {load && <img src={loading} alt="loading" className="showload" />}
        <div className="load-area">
          <img
            src={loadButton}
            alt="load more"
            className="load "
            onClick={handleGetData}
          ></img>
        </div>
      </div>
      {/*  <button onClick={handleGetData}>More</button> */}
    </div>
  );
}

export default App;
