import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Tab1 from "../Tab/Tab1";
import Tab2 from "../Tab/Tab2";
import "./Home.css";

const Home = () => {
  return (
    <main>

      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<Tab1 />} /> */}
          <Route exact path="/" element={<Tab1 />} />
          <Route exact path="/leaderboard" element={<Tab2 />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Home;
