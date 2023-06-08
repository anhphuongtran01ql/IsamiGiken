import React from "react";
import { Route, Routes } from "react-router-dom";
import TopPage from "../TopPage/topPage";
import ContactUs from "../ContactUs/contactUs";
import { Layout } from "antd";
const { Content } = Layout;

function RouteComponent() {
  return (
    <Content>
      <Routes>
        <Route path="/" element={<TopPage />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
      </Routes>
    </Content>
  );
}

export default RouteComponent;
