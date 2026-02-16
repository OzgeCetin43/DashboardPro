import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar.component";
import Header from "../components/header.component";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex gap-10">
      <Sidebar />
      <div className="ml-18 w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
