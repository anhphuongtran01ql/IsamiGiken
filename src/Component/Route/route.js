import React from "react";
import { Route, Routes } from "react-router-dom";
import TopPage from "../TopPage/topPage";
import ContactUs from "../ContactUs/contactUs";
import Simulation from "../Simulation/simulation";
import Renovation from "../Renovation/renovation";
import About from "../About/about";
import Recruitment from "../Recruitment/recruitment";
import PrivatePolicy from "../Policy/policy";
import NewsLists from "../News/newsLists";

function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<TopPage />}></Route>
      <Route path="/renovation" element={<Renovation />}></Route>
      <Route path="/simulation" element={<Simulation />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/recruit" element={<Recruitment />}></Route>
      <Route path="/contact-us" element={<ContactUs />}></Route>
      <Route path="/private-policy" element={<PrivatePolicy />}></Route>
      <Route path="/news-lists" element={<NewsLists />}></Route>
    </Routes>
  );
}

export default RouteComponent;
