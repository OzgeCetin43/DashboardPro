import React from "react";
import { FaCircleCheck, FaLocationDot } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { GiLevelEndFlag } from "react-icons/gi";
import { DiHtml5Connectivity } from "react-icons/di";
import { FaPlus } from "react-icons/fa";

import hero from "../assets/images/hero.png";

import { myProfileInfo } from "../assets/data/myProfileInfo.data";

const MyProfile: React.FC = () => {
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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        {myProfileInfo.map((item) => (
          <div
            key={item.id}
            className="flex-1 flex items-center justify-center gap-2 border border-border-color rounded-xs p-2 bg-bg-tertiary shadow-xs"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-15 h-15 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="font-bold text-text-primary">{item.value}</p>
              <h1 className="text-xs text-text-secondary">{item.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfile;
