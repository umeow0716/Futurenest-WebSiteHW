import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar.js";
import Overview from "./components/CenterColumn/CenterColumn";
import ProductSales from "./components/Sales/ProductSales";
import BusinessAnalysis from "./components/Sales/BusinessAnalysis";
import Notification from "./Notification.svg";
import Cloud from "./Cloud.svg";
import { useEffect } from "react";

const Main = styled.div`
  text-align: center;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: row;
  font-size: calc(10px + 2vmin);
  color: black;
  overflow: auto;

  height: 100vh;
  width: 100vw;
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100px;
  object-fit: cover;
`;

function App() {
  return (
    <Main>
      <Router>
      <Sidebar />
      <div className="CenterColumn">
        <div className="top">
          <img src={Cloud} alt="Cloud" />
          <img src={Notification} alt="Notification" />
          <Avatar src="/avatar.jpg" alt="Avatar" />
          Johnson Finch
        </div>

        <div className="context">
          <Routes>
            <Route path="/Overview" element={<Overview />} />
            <Route path="/ProductSales" element={<ProductSales />} />
            <Route path="/BusinessAnalysis" element={<BusinessAnalysis />} />
          </Routes>
        </div>
      </div>
      </Router>
    </Main>
  );
}

export default App;
