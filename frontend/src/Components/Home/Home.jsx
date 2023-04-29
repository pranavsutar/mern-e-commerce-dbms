import React from "react";
import Categories from "./Categories";
import ImageSlider from "./ImageSlider";
import Newsletter from "./Newsletter";
import AdComponent from "../Advertise/AdComponent";

const Home = () => {
  return (
    <>
      <ImageSlider />
      <Categories />
      {/* <Newsletter /> */}
      <h1 style={{ textAlign: "center" }}>Advertisement</h1>
      <AdComponent />
    </>
  );
};

export default Home;
