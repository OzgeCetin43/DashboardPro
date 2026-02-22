import React from "react";
import { FaTimes, FaCheckDouble } from "react-icons/fa";

import icon1 from "../assets/images/icon-1.svg";
import avatar1 from "../assets/images/avatar-1.png";
import avatar2 from "../assets/images/avatar-2.png";
import avatar3 from "../assets/images/hero.png";
import avatar4 from "../assets/images/avatar-3.png";

interface ChatProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Chat: React.FC<ChatProps> = ({ setIsOpen }) => {
  return (
    <div className="absolute flex flex-col gap-4 w-4/5 h-[88vh] md:w-1/2 md:h-[98vh] overflow-y-auto top-0 right-0 mt-[1vh] mr-[2vw] md:mr-[0.5vw] bg-bg-secondary p-4 rounded-xs shadow-xs border border-border-color">
      <div className="flex items-center justify-between border-b border-text-secondary/10 pb-2">
        <h1 className="text-text-primary font-bold">Chat</h1>
        <button
          className="text-text-secondary hover:text-text-primary cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>
      </div>
      <div className="flex flex-col justify-center gap-2 text-xs border-b border-text-secondary/10 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-bg-primary flex items-center justify-center border border-border-color">
              <img src={icon1} alt="icon" />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <h2 className="text-text-primary font-bold">HR Team</h2>
              <span className="text-text-secondary text-xs">
                Jessy is typing...
              </span>
            </div>
          </div>
          <div className="flex items-center gap-0.5">
            <div className="w-8 h-8 flex items-center justify-center">
              <img
                src={avatar1}
                alt="avatar"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <img
                src={avatar2}
                alt="avatar"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="w-8 h-8 flex items-center justify-center">
              <img
                src={avatar3}
                alt="avatar"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-status-success/75 rounded-full">
              <span className="text-primary">+10</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 text-xs">
        <div className="flex items-end gap-2">
          <img src={avatar1} alt="avatar" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col justify-center gap-1">
            <h2 className="text-text-primary bg-bg-primary p-2 rounded-xs border border-border-color">
              Hello! Next week we are closing the project. Do You have
              questions?
            </h2>
            <span className="text-text-secondary text-xs">14:04</span>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="flex flex-col justify-center items-end gap-1">
            <h2 className="text-text-primary bg-accent-primary/75 p-2 rounded-xs border border-border-color">
              This is excellent news!
            </h2>
            <div className="flex items-center gap-1">
              <span className="text-text-secondary text-xs">14:08</span>
              <FaCheckDouble className="text-status-success" />
            </div>
          </div>
          <img src={avatar3} alt="avatar" className="w-8 h-8 rounded-full" />
        </div>
        <div className="flex items-end gap-2">
          <img src={avatar2} alt="avatar" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col justify-center gap-1">
            <h2 className="text-text-primary bg-bg-primary p-2 rounded-xs border border-border-color">
              I have checked the features, can not wait to demo them!
            </h2>
            <span className="text-text-secondary text-xs">14:26</span>
          </div>
        </div>
        <div className="flex items-end gap-2">
          <img src={avatar1} alt="avatar" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col justify-center gap-1">
            <h2 className="text-text-primary bg-bg-primary p-2 rounded-xs border border-border-color">
              I have looked over the rollout plan, and everything seems spot on.
              I am ready on my end and can not wait for the user feedback.
            </h2>
            <span className="text-text-secondary text-xs">15:09</span>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="flex flex-col justify-center items-end gap-1">
            <h2 className="text-text-primary bg-accent-primary/75 p-2 rounded-xs border border-border-color">
              Haven't seen the build yet, I'll look now.
            </h2>
            <div className="flex items-center gap-1">
              <span className="text-text-secondary text-xs">15:52</span>
              <FaCheckDouble className="text-status-success" />
            </div>
          </div>
          <img src={avatar3} alt="avatar" className="w-8 h-8 rounded-full" />
        </div>
        <div className="flex justify-end gap-2">
          <div className="flex flex-col justify-center items-end gap-1">
            <h2 className="text-text-primary bg-accent-primary/75 p-2 rounded-xs border border-border-color">
              Checking the build now!
            </h2>
            <div className="flex items-center gap-1">
              <span className="text-text-secondary text-xs">15:52</span>
              <FaCheckDouble className="text-status-success" />
            </div>
          </div>
          <img src={avatar3} alt="avatar" className="w-8 h-8 rounded-full" />
        </div>
        <div className="flex items-end gap-2">
          <img src={avatar2} alt="avatar" className="w-8 h-8 rounded-full" />
          <div className="flex flex-col justify-center gap-1">
            <h2 className="text-text-primary bg-bg-primary p-2 rounded-xs border border-border-color">
              Tomorrow, I will send the link for the meeting.
            </h2>
            <span className="text-text-secondary text-xs">17:40</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 bg-bg-tertiary p-2 rounded-xs border border-text-primary/10 shadow-xs">
          <div className="flex items-center gap-2">
            <img src={avatar4} alt="avatar" className="w-8 h-8 rounded-full" />
            <div className="flex flex-col justify-center gap-1">
              <h2 className="text-text-primary">
                John Perez wants to join chat
              </h2>
              <span className="text-text-secondary text-xs">1 day ago</span>
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
    </div>
  );
};

export default Chat;
