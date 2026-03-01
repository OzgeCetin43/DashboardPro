import React, { useState } from "react";
import { FaCircleCheck, FaLocationDot } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { GiLevelEndFlag } from "react-icons/gi";
import { DiHtml5Connectivity } from "react-icons/di";
import { FaPlus } from "react-icons/fa";

import hero from "../assets/images/hero.png";

import ProfileTab from "../components/profileTab.component";

const MyProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("profile");

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 bg-bg-tertiary rounded-xs shadow-xs p-2 border border-border-color">
        <div className="flex items-center gap-2">
          <img src={hero} alt="hero" className="w-15 h-15 rounded-full" />
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <h1 className="text-xs font-bold">Isabella Bennett</h1>
              <FaCircleCheck className="text-status-info" />
            </div>
            <p className="text-xs text-text-secondary">Designer</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <FaLocationDot className="text-text-primary" />
                <p className="text-xs text-text-primary">New York, USA</p>
              </div>
              <div className="flex items-center gap-1">
                <IoLogoDiscord className="text-text-primary" />
                <p className="text-xs text-text-primary">@isabella</p>
              </div>
              <div className="flex items-center gap-1">
                <GiLevelEndFlag className="text-text-primary" />
                <p className="text-xs text-text-primary">Level 22</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-xs flex items-center gap-1 cursor-pointer p-2 bg-status-warning/10 hover:bg-status-warning/20 text-status-warning rounded-xs">
            <DiHtml5Connectivity size={18} /> Connect
          </button>
          <button className="text-xs flex items-center gap-1 cursor-pointer p-2 bg-status-info/10 hover:bg-status-info/20 text-status-info rounded-xs">
            <FaPlus size={18} /> Invite to Team
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 bg-bg-tertiary rounded-xs shadow-xs p-2 border border-border-color">
        <ul className="flex items-center gap-2 text-xs cursor-pointer">
          <li
            onClick={() => setActiveTab("profile")}
            className={`${activeTab === "profile" ? "text-accent-primary" : ""} hover:text-accent-hover`}
          >
            Profile
          </li>
          <li
            onClick={() => setActiveTab("projects")}
            className={`${activeTab === "projects" ? "text-accent-primary" : ""} hover:text-accent-hover`}
          >
            Projects
          </li>
          <li
            onClick={() => setActiveTab("works")}
            className={`${activeTab === "works" ? "text-accent-primary" : ""} hover:text-accent-hover`}
          >
            Works
          </li>
          <li
            onClick={() => setActiveTab("teams")}
            className={`${activeTab === "teams" ? "text-accent-primary" : ""} hover:text-accent-hover`}
          >
            Teams
          </li>
          <li
            onClick={() => setActiveTab("network")}
            className={`${activeTab === "network" ? "text-accent-primary" : ""} hover:text-accent-hover`}
          >
            Network
          </li>
          <li
            onClick={() => setActiveTab("activity")}
            className={`${activeTab === "activity" ? "text-accent-primary" : ""} hover:text-accent-hover`}
          >
            Activity
          </li>
          <li
            onClick={() => setActiveTab("campaigns")}
            className={`${activeTab === "campaigns" ? "text-accent-primary" : ""} hover:text-accent-hover`}
          >
            Campaigns
          </li>
        </ul>
      </div>
      {activeTab === "profile" && <ProfileTab />}
    </div>
  );
};

export default MyProfile;
