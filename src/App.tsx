import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Preloader from "./components/preloader.component";
import DashboardLayout from "./layouts/dashboard.layout";
import Home from "./pages/home.page";
import MyProfile from "./pages/myProfile.page";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="my-profile" element={<MyProfile />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
