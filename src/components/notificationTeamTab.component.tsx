import React, { useRef } from "react";
import { FaFile } from "react-icons/fa6";
import { IoCloudDownloadOutline, IoImagesOutline } from "react-icons/io5";
import { PiFileSvg } from "react-icons/pi";

import avatar1 from "../assets/images/avatar-1.png";
import avatar2 from "../assets/images/avatar-2.png";

const NotificationTeamTab: React.FC = () => {
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
            Nova Hawthorne sent you an meeting invation
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">2 days ago</span>
            <span>Dev Team</span>
          </div>
          <div className="flex items-center justify-between gap-2 rounded-xs bg-bg-primary p-2 shadow-xs">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center border border-border-color rounded-xs shadow-xs">
                <div className="bg-status-warning/20 p-2">Apr</div>
                <div className="p-2">12</div>
              </div>
              <div className="flex flex-col justify-center gap-1">
                <p className="text-text-primary font-bold">
                  Peparation For Release
                </p>
                <span className="text-text-secondary">10:00 AM - 11:00 AM</span>
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
            Adrian Vale posted a new article
            <span className="text-accent-primary"> Marketing</span> to 13 May
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">3 days ago</span>
            <span>Marketing</span>
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
            Skylar Frost uploaded 2 attachments
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">5 days ago</span>
            <span>Web Design (Total: 5 MB)</span>
          </div>
          <div className="flex items-center gap-2 bg-bg-primary p-2 rounded-xs border border-border-color shadow-xs">
            <FaFile size={18} className="text-status-info" />
            <span className="w-full flex items-center justify-between gap-4">
              Landing-page.docx
              <IoCloudDownloadOutline
                size={18}
                className="text-text-secondary cursor-pointer hover:text-text-primary"
              />
            </span>
          </div>
          <div className="flex items-center gap-2 bg-bg-primary p-2 rounded-xs border border-border-color shadow-xs">
            <PiFileSvg size={18} className="text-status-warning" />
            <span className="w-full flex items-center justify-between gap-4">
              New-icon.svg
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
            Selene Silverleaf commented on
            <span className="text-accent-primary"> SiteSculpt</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">1 week ago</span>
            <span>Manager</span>
          </div>
          <div className="flex flex-col justify-center gap-1 bg-bg-primary rounded-xs shadow-xs p-2 w-full">
            <p className="text-text-primary">
              @Cody This design is simply stunning! From layout to color, it's a
              work of art!
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
            Thalia Fox has invited you to join
            <span className="text-accent-primary"> Design Research</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">23 Jan 2026</span>
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

export default NotificationTeamTab;
