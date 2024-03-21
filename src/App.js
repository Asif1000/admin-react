import { React, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import Home from "./Components/Home";

const App = () => {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  );
};

export default App;
