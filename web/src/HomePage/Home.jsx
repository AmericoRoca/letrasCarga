import React, { useEffect } from "react";
import "../HomePage/Home.css"
import { About } from "../About/About";
import { Services } from "../Services/Services";
import { Portfolio } from "../Portfolio/Portfolio";
import { Contact } from "../Contact/Contact";
import { Navbar } from "../Navbar/Navbar";
import { Stack } from "../Stack/Stack.jsx";

const Home = ({  }) => {

  return (
    <div className="container-fluid w-100 h-100">
  <div className="row w-100 h-100">
    <div className="col-12 col-md-1">
      <Navbar />
    </div>

    <div className="col-12 col-md-11 d-flex flex-column">
      <div className="row flex-grow-1 p-2">
        <div className="col-12 col-md-8 p-2">
          <About />
        </div>
        <div className="col-12 col-md-4 p-2">
          <Services />
        </div>
      </div>

      <div className="row flex-grow-1 p-2">
        <div className="col-12 col-md-6 p-2">
          <Portfolio />
        </div>
        <div className="col-12 col-md-3 p-2">
          <Stack />
        </div>
        <div className="col-12 col-md-3 p-2">
          <Contact />
        </div>
      </div>
    </div>
  </div>
</div>

  

           
  );
};

export default Home;
