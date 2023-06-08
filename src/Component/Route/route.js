import React from "react";
import { Route, Routes } from "react-router-dom";
import TopPage from "../TopPage/topPage";
import ContactUs from "../ContactUs/contactUs";
import { Layout } from "antd";
import Simulation from "../Simulation/simulation";
import Renovation from "../Renovation/renovation";
import About from "../About/about";
import Recruitment from "../Recruitment/recruitment";
import PrivatePolicy from "../Policy/policy";
const { Content } = Layout;

function RouteComponent() {
  return (
    <Content>
      <Routes>
        <Route path="/" element={<TopPage />}></Route>
        <Route path="/renovation" element={<Renovation />}></Route>
        <Route path="/simulation" element={<Simulation />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/recruit" element={<Recruitment />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/private-policy" element={<PrivatePolicy />}></Route>
      </Routes>
    </Content>
  );
}

export default RouteComponent;
