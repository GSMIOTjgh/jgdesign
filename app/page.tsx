'use client'

import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

const Homepage: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState("Installation");

  return(
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar setSelectedContent={setSelectedContent} />
        <Main selectedContent={selectedContent} />
      </div>
    </div>
  );
}

export default Homepage;