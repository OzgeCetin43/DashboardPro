import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

import NotificationAllTab from "./notificationAllTab.component";
import NotificationInboxTab from "./notificationInboxTab.component";
import NotificationTeamTab from "./notificationTeamTab.component";
import NotificationFollowingTab from "./notificationFollowingTab.component";

import { settingsLinks } from "../assets/data/settingsLinks.data";

interface NotificationProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Notification: React.FC<NotificationProps> = ({ setIsOpen }) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  return (
    <div className="absolute flex flex-col gap-4 w-4/5 h-[88vh] md:w-1/2 md:h-[98vh] overflow-y-auto top-0 right-0 mt-[1vh] mr-[2vw] md:mr-[0.5vw] bg-bg-secondary p-4 rounded-xs shadow-xs border border-border-color">
      <div className="flex items-center justify-between">
        <h1 className="text-text-primary font-bold">Notifications</h1>
        <button
          className="text-text-secondary hover:text-text-primary cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>
      </div>
      <div className="flex items-center justify-between gap-4 border-b border-text-secondary/10 pb-2">
        <div className="flex items-center gap-6">
          <button
            className={`hover:text-text-primary cursor-pointer ${activeTab === "all" ? "text-accent-primary font-bold" : "text-text-secondary"}`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`relative hover:text-text-primary cursor-pointer ${activeTab === "inbox" ? "text-accent-primary font-bold" : "text-text-secondary"}`}
            onClick={() => setActiveTab("inbox")}
          >
            Inbox
            <span className="absolute top-0 -right-2 w-1.5 h-1.5 bg-accent-primary rounded-full"></span>
          </button>
          <button
            className={`hover:text-text-primary cursor-pointer ${activeTab === "team" ? "text-accent-primary font-bold" : "text-text-secondary"}`}
            onClick={() => setActiveTab("team")}
          >
            Team
          </button>
          <button
            className={`hover:text-text-primary cursor-pointer ${activeTab === "following" ? "text-accent-primary font-bold" : "text-text-secondary"}`}
            onClick={() => setActiveTab("following")}
          >
            Following
          </button>
        </div>
        <div className="relative flex items-center justify-center">
          <CiSettings
            size={18}
            className="cursor-pointer text-text-secondary hover:text-text-primary"
            onClick={() => setIsSettingsOpen((prev) => !prev)}
          />
          {isSettingsOpen && (
            <div className="absolute w-50 text-xs top-full right-0 bg-bg-secondary shadow-xs border border-border-color rounded-xs">
              {settingsLinks.map((link) => (
                <Link
                  key={link.id}
                  to="/"
                  className="flex items-center gap-2 p-2 hover:bg-bg-primary rounded-xs"
                >
                  {link.icon}
                  <span className="text-text-secondary">{link.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      {activeTab === "all" && <NotificationAllTab />}
      {activeTab === "inbox" && <NotificationInboxTab />}
      {activeTab === "team" && <NotificationTeamTab />}
      {activeTab === "following" && <NotificationFollowingTab />}
    </div>
  );
};

export default Notification;
