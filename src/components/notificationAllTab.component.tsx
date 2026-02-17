import React, { useRef } from "react";
import { IoImagesOutline, IoLogoFigma } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";

const NotificationAllTab: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex flex-col md:flex-row gap-2 border-b border-border-color rounded-xs cursor-pointer p-2 hover:bg-bg-tertiary">
        <div className="w-12 h-12 rounded-full bg-bg-primary relative flex items-center justify-center border border-border-color">
          <p className="text-text-primary font-bold">CH</p>
          <span className="w-1.5 h-1.5 bg-status-success rounded-full absolute bottom-1 right-1"></span>
        </div>
        <div className="flex flex-col justify-center gap-1 text-xs w-full">
          <p className="font-bold text-text-primary">
            Joe Lincoln mentioned you in
            <span className="text-accent-primary"> Latest Trends</span> topic
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">53 minutes ago</span>
            <span>Web Design 2026</span>
          </div>
          <div className="flex flex-col justify-center gap-1 bg-bg-primary rounded-xs shadow-xs p-2 w-full">
            <p className="text-text-primary">
              @Cody For an expert opinion, check out what Mike has to say on
              this topic!
            </p>
            <div className="flex items-center justify-between bg-bg-tertiary border border-border-color px-2 py-1 rounded-xs">
              <input type="text" placeholder="Reply" className="outline-none" />
              <input type="file" ref={fileInputRef} className="hidden" />
              <IoImagesOutline
                size={18}
                className="text-text-secondary cursor-pointer hover:text-text-primary"
                onClick={() => fileInputRef.current?.click()}
              />
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
            Leslie Alexander added new tags to
            <span className="text-accent-primary"> Web Redesign 2026</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">2 hours ago</span>
            <span>ACME</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-status-error bg-status-error/20 px-2 py-1 rounded-xs">
              Client-Request
            </span>
            <span className="text-status-warning bg-status-warning/20 px-2 py-1 rounded-xs">
              Figma
            </span>
            <span className="text-text-primary bg-text-primary/20 px-2 py-1 rounded-xs">
              Redesign
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
            Guy Hawkins requested access to
            <span className="text-accent-primary"> AirSpace</span> project
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">18 hours ago</span>
            <span>Dev Team</span>
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
            Jane Perez invites you to review a file
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">20 hours ago</span>
            <span>742 KB</span>
          </div>
          <div className="flex items-center gap-2 bg-bg-primary p-2 rounded-xs border border-border-color shadow-xs">
            <FaFilePdf size={18} className="text-status-error" />
            <span className="flex items-center gap-4">
              Launch_nov24.pptx
              <span className="text-text-secondary"> Edited 39 mins ago</span>
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
            Raymond Pawell posted a new article
            <span className="text-accent-primary"> 2026 Roadmap</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">1 day ago</span>
            <span>Roadmap</span>
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
            Tyler Hero wants to view your design project
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">3 days ago</span>
            <span>Dashboard Pro Launcher mockups</span>
          </div>
          <div className="flex items-center gap-2 bg-bg-primary p-2 rounded-xs border border-border-color shadow-xs">
            <IoLogoFigma size={18} className="text-status-info" />
            <span className="flex items-center gap-4">
              Launcher-UIkit.fig
              <span className="text-text-secondary"> Edited 2 mins ago</span>
            </span>
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

export default NotificationAllTab;
