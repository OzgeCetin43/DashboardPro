import React from "react";
import { SiJirasoftware } from "react-icons/si";
import { FaCheck, FaUserCheck } from "react-icons/fa";

import inspiration1 from "../assets/images/inspiration-1.jpg";
import inspiration2 from "../assets/images/inspiration-2.jpg";

const NotificationFollowingTab: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex flex-col md:flex-row gap-2 border-b border-border-color rounded-xs cursor-pointer p-2 hover:bg-bg-tertiary">
        <div className="w-12 h-12 rounded-full bg-bg-primary relative flex items-center justify-center border border-border-color">
          <p className="text-text-primary font-bold">CH</p>
          <span className="w-1.5 h-1.5 bg-status-success rounded-full absolute bottom-1 right-1"></span>
        </div>
        <div className="flex flex-col justify-center gap-1 text-xs w-full">
          <p className="font-bold text-text-primary">
            Jane Perez added 2 new works to
            <span className="text-accent-primary"> Inspirations 2026</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">23 hours ago</span>
            <span>Craftwork Design</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <div className="flex flex-col justify-center gap-2 border border-border-color shadow-xs rounded-xs bg-bg-primary">
              <img
                src={inspiration1}
                alt="inspiration"
                className="w-full h-50 object-cover rounded-xs"
              />
              <div className="flex flex-col gap-1 p-2">
                <p className="font-bold text-text-primary">
                  Geometric Patterns
                </p>
                <span className="text-text-secondary">
                  Token ID: <b>81023</b>
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2 border border-border-color shadow-xs rounded-xs bg-bg-primary">
              <img
                src={inspiration2}
                alt="inspiration"
                className="w-full h-50 object-cover rounded-xs"
              />
              <div className="flex flex-col gap-1 p-2">
                <p className="font-bold text-text-primary">
                  Artistic Expressions
                </p>
                <span className="text-text-secondary">
                  Token ID: <b>67890</b>
                </span>
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
            Natalie Wood wants to edit marketing project
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">1 day ago</span>
            <span>Designer</span>
          </div>
          <div className="flex items-center gap-2 bg-bg-primary p-2 rounded-xs border border-border-color shadow-xs">
            <SiJirasoftware size={18} className="text-status-info" />
            <span className="flex items-center gap-4">
              User-feedback.jira
              <span className="text-text-secondary"> Edited 1 hour ago</span>
            </span>
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
            Aaron Foster requested to view
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">3 days ago</span>
            <span>Larsen Ltd</span>
          </div>
          <div className="flex items-center gap-2 bg-bg-primary shadow-xs rounded-xs border border-border-color p-2">
            <FaUserCheck size={18} className="text-status-success" />
            <p className="font-bold text-status-success">
              You allowed Aaron to view
            </p>
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
            Chloe Morgan posted a new article
            <span className="text-accent-primary"> User Experience</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">4 days ago</span>
            <span>Nexus</span>
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
            Gabriel Bennett started connect you
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">5 days ago</span>
            <span>Development</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 bg-status-success text-bg-tertiary rounded-xs px-2 py-1 cursor-pointer hover:bg-status-success/80">
              <FaCheck size={12} /> Connected
            </button>
            <button className="bg-accent-primary text-bg-tertiary rounded-xs px-2 py-1 cursor-pointer hover:bg-accent-hover">
              Go to profile
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
            Thalia Fox has invited you to join
            <span className="text-accent-primary"> Design Research</span>
          </p>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">1 week ago</span>
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

export default NotificationFollowingTab;
