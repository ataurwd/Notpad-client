import React, { useEffect } from "react";
import HomeHeading from "./HomeHeading";
import HowWork from "./HowWork";
import Benefit from "./Benefit";
import Aos from "aos";

const Home = () => {

  return (
    <div>
          <HomeHeading />
          <HowWork />
          <Benefit/>
    </div>
  );
};

export default Home;
