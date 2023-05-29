import React from "react";
import ComHeader from "./Common/ComHeader";
import Block from "./Block";
import Portfolio from "./Portfolios";
import Cards from "./Cards";
import ComFooter from "./Common/ComFooter";

function Home() {
  return (
    <div>
      <ComHeader />
      <Block />
      {/* <Portfolio /> */}
      <Cards />
      <ComFooter />
    </div>
  );
}

export default Home;
