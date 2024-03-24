import { React, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import Home from "./Components/Home";
import Venue from "./Components/Venue/Venue";

const App = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />

        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/venue" element={<Venue />} />
        </Routes>
    </div>
  );
};

export default App;
