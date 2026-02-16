import React, { useState } from "react";

import Navigation from "./navigation.component";

import logo from "../assets/images/logo.png";

import { sidebar } from "../assets/data/sidebar.data";
import { dashboardLinks } from "../assets/data/dashboardLinks.data";
import { appLinks } from "../assets/data/appLinks.data";
import { authenticationLinks } from "../assets/data/authenticationLinks.data";
import { pageLinks } from "../assets/data/pageLinks.data";
import { landingLinks } from "../assets/data/landingLinks.data";
import { miscellaneousLinks } from "../assets/data/miscellaneousLinks.data";

const Sidebar: React.FC = () => {
  const [selectedNavigation, setSelectedNavigation] = useState<string | null>(
    null,
  );

  const handleNavigationClick = (name: string) => {
    setSelectedNavigation((prev) => {
      if (prev === name) {
        return null;
      }
      return name;
    });
  };

  return (
    <aside className="h-full bg-bg-secondary border-r border-border-color flex flex-col z-10 gap-8 p-4 absolute top-0 left-0">
      <div className="w-full flex items-center justify-between">
        <div className="w-10 h-10 flex items-center justify-center bg-bg-primary border border-border-color rounded-full cursor-pointer hover:border-accent-primary">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col gap-6">
          {sidebar.map((link) => (
            <div
              key={link.id}
              className="flex items-center gap-2 text-xs cursor-pointer group"
              onClick={() => handleNavigationClick(link.name)}
            >
              <div className="w-10 h-10 flex items-center justify-center border border-border-color rounded-xs bg-bg-primary group-hover:border-accent-primary">
                {link.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {selectedNavigation === "dashboards" && (
          <Navigation
            pageLinks={dashboardLinks}
            setSelectedNavigation={setSelectedNavigation}
          />
        )}
        {selectedNavigation === "apps" && (
          <Navigation
            pageLinks={appLinks}
            setSelectedNavigation={setSelectedNavigation}
          />
        )}
        {selectedNavigation === "authentication" && (
          <Navigation
            pageLinks={authenticationLinks}
            setSelectedNavigation={setSelectedNavigation}
          />
        )}
        {selectedNavigation === "pages" && (
          <Navigation
            pageLinks={pageLinks}
            setSelectedNavigation={setSelectedNavigation}
          />
        )}
        {selectedNavigation === "landing" && (
          <Navigation
            pageLinks={landingLinks}
            setSelectedNavigation={setSelectedNavigation}
          />
        )}
        {selectedNavigation === "miscellaneous" && (
          <Navigation
            pageLinks={miscellaneousLinks}
            setSelectedNavigation={setSelectedNavigation}
          />
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
