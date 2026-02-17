import React from "react";
import { FaCheck } from "react-icons/fa";
import { BsFiletypeXls } from "react-icons/bs";
import { IoCloudDownloadOutline } from "react-icons/io5";

import avatar1 from "../assets/images/avatar-1.png";
import avatar2 from "../assets/images/avatar-2.png";

const NotificationInboxTab: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex flex-col md:flex-row gap-2 border-b border-border-color rounded-xs cursor-pointer p-2 hover:bg-bg-tertiary">
        <div className="w-12 h-12 rounded-full bg-bg-primary relative flex items-center justify-center border border-border-color">
          <p className="text-text-primary font-bold">CH</p>
          <span className="w-1.5 h-1.5 bg-status-success rounded-full absolute bottom-1 right-1"></span>
        </div>
        <div className="flex flex-col justify-center gap-1 text-xs w-full">
          <p className="font-bold text-text-primary">
            Samuel Lee requested to add user to
            <span className="text-accent-primary"> TechSynergy</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">22 hours ago</span>
            <span>Dev Team</span>
          </div>
          <div className="flex items-center justify-between gap-2 bg-bg-primary rounded-xs shadow-xs p-2 w-full">
            <div className="flex flex-col justify-center gap-1">
              <p className="text-text-primary font-bold">Ronald Richards</p>
              <p className="text-text-secondary">ronald.richards@gmail.com</p>
            </div>
            <button className="bg-accent-primary text-bg-tertiary hover:bg-accent-hover px-2 py-1 rounded-xs cursor-pointer">
              Go to profile
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-status-error text-bg-tertiary rounded-xs px-2 py-1 cursor-pointer hover:bg-status-error/80">
              Decline
            </button>
            <button className="bg-status-success text-bg-tertiary rounded-xs px-2 py-1 cursor-pointer hover:bg-status-success/80">
              Accept
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 border-b border-border-color rounded-xs cursor-pointer p-2 hover:bg-bg-tertiary">
        <div className="w-12 h-12 rounded-full bg-bg-primary relative flex items-center justify-center border border-border-color">
          <p className="text-text-primary font-bold">
            <FaCheck size={18} className="text-status-success" />
          </p>
        </div>
        <div className="flex flex-col justify-center gap-1 text-xs w-full">
          <p className="font-bold text-text-primary">
            You have succesfully verified your account
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">2 days ago</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 border-b border-border-color rounded-xs cursor-pointer p-2 hover:bg-bg-tertiary">
        <div className="w-12 h-12 rounded-full bg-bg-primary relative flex items-center justify-center border border-border-color">
          <p className="text-text-primary font-bold">CH</p>
          <span className="w-1.5 h-1.5 bg-status-success rounded-full absolute bottom-1 right-1"></span>
        </div>
        <div className="flex flex-col justify-center gap-1 text-xs w-full">
          <p className="font-bold text-text-primary">
            Ava Peterson uploaded attachment
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">3 days ago</span>
            <span>ACME (2.6 MB)</span>
          </div>
          <div className="flex items-center gap-2 bg-bg-primary p-2 rouded-xs border border-border-color shadow-xs">
            <BsFiletypeXls size={18} className="text-status-success" />
            <span className="w-full flex items-center justify-between gap-4">
              Redesign-2024.xls
              <IoCloudDownloadOutline
                size={18}
                className="text-text-secondary cursor-pointer hover:text-text-primary"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 border-b border-border-color rounded-xs cursor-pointer p-2 hover:bg-bg-tertiary">
        <div className="w-12 h-12 rounded-full bg-bg-primary relative flex items-center justify-center border border-border-color">
          <p className="text-text-primary font-bold">CH</p>
          <span className="w-1.5 h-1.5 bg-status-success rounded-full absolute bottom-1 right-1"></span>
        </div>
        <div className="flex flex-col justify-center gap-1 text-xs w-full">
          <p className="font-bold text-text-primary">
            Ethan Parker created a new tasks to
            <span className="text-accent-primary"> Site Sculpt</span> project
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">3 days ago</span>
            <span>Web Designer</span>
          </div>
          <div className="flex items-center justify-between gap-2 bg-bg-primary rounded-xs shadow-xs p-2 w-full">
            <div className="w-full flex justify-between gap-2">
              <div className="flex flex-col justify-center gap-1">
                <p className="text-text-primary font-bold">
                  Location history is erased after Logging In
                </p>
                <p className="text-text-secondary">Due Date: 15 May, 2024</p>
                <div className="flex items-center gap-2">
                  <span className="text-status-success bg-status-success/20 px-2 py-1 rounded-xs">
                    Improvement
                  </span>
                  <span className="text-status-error bg-status-error/20 px-2 py-1 rounded-xs">
                    Bug
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <img
                  src={avatar1}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <img
                  src={avatar2}
                  alt="avatar"
                  className="w-8 h-8 rounded-full relative right-3 md:right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 border-b border-border-color rounded-xs cursor-pointer p-2 hover:bg-bg-tertiary">
        <div className="w-12 h-12 rounded-full bg-bg-primary relative flex items-center justify-center border border-border-color">
          <p className="text-text-primary font-bold">CH</p>
          <span className="w-1.5 h-1.5 bg-status-success rounded-full absolute bottom-1 right-1"></span>
        </div>
        <div className="flex flex-col justify-center gap-1 text-xs w-full">
          <p className="font-bold text-text-primary">
            Benjamin Harris requested to upgrade plan
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">4 days ago</span>
            <span>Marketing</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="bg-status-error text-bg-tertiary rounded-xs px-2 py-1 cursor-pointer hover:bg-status-error/80">
              Decline
            </button>
            <button className="bg-status-success text-bg-tertiary rounded-xs px-2 py-1 cursor-pointer hover:bg-status-success/80">
              Accept
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 border-b border-border-color rounded-xs cursor-pointer p-2 hover:bg-bg-tertiary">
        <div className="w-12 h-12 rounded-full bg-bg-primary relative flex items-center justify-center border border-border-color">
          <p className="text-text-primary font-bold">CH</p>
          <span className="w-1.5 h-1.5 bg-status-success rounded-full absolute bottom-1 right-1"></span>
        </div>
        <div className="flex flex-col justify-center gap-1 text-xs w-full">
          <p className="font-bold text-text-primary">
            Isaac Morgan mentioned you in
            <span className="text-accent-primary"> Data Transmission </span>
            topic
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">1 week ago</span>
            <span>Dev Team</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 text-xs">
        <button className="w-1/2 p-2 cursor-pointer bg-status-warning/10 hover:bg-status-warning/20 text-status-warning rounded-xs">
          Archive All
        </button>
        <button className="w-1/2 p-2 cursor-pointer bg-status-info/10 hover:bg-status-info/20 text-status-info rounded-xs">
          Mark All as Read
        </button>
      </div>
    </div>
  );
};

export default NotificationInboxTab;
