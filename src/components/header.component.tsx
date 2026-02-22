import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { IoMdChatboxes } from "react-icons/io";
import { MdLogout } from "react-icons/md";

import ThemeToggle from "./themeToggle.component";
import Notification from "./notification.component";
import Chat from "./chat.component";
import Cart from "./cart.component";

import hero from "../assets/images/hero.png";
import { profileLinks } from "../assets/data/profileLinks.data";

const Header: React.FC = () => {
  const [isNotificationPanelOpen, setIsNotificationPanelOpen] =
    useState<boolean>(false);
  const [isChatPanelOpen, setIsChatPanelOpen] = useState<boolean>(false);
  const [isCartPanelOpen, setIsCartPanelOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  return (
    <header className="flex items-center justify-end gap-4 p-2 bg-bg-secondary">
      <div
        className="relative bg-bg-tertiary p-2.5 rounded-full hover:bg-bg-tertiary/80 cursor-pointer border border-border-color group"
        onClick={() => setIsNotificationPanelOpen(true)}
      >
        <FaBell className="w-5 h-5 text-text-secondary group-hover:text-text-primary" />
        <span className="w-2.5 h-2.5 bg-status-error rounded-full absolute top-0 right-0 border-2 border-bg-secondary"></span>
      </div>
      <div
        className="relative bg-bg-tertiary p-2.5 rounded-full hover:bg-bg-tertiary/80 cursor-pointer border border-border-color group"
        onClick={() => setIsChatPanelOpen(true)}
      >
        <IoMdChatboxes className="w-5 h-5 text-text-secondary group-hover:text-text-primary" />
        <span className="w-2.5 h-2.5 bg-status-warning rounded-full absolute top-0 right-0 border-2 border-bg-secondary"></span>
      </div>
      <div
        className="relative bg-bg-tertiary p-2.5 rounded-full hover:bg-bg-tertiary/80 cursor-pointer border border-border-color group"
        onClick={() => setIsCartPanelOpen(true)}
      >
        <FaShoppingCart className="w-5 h-5 text-text-secondary group-hover:text-text-primary" />
        <span className="w-2.5 h-2.5 bg-status-success rounded-full absolute top-0 right-0 border-2 border-bg-secondary"></span>
      </div>
      <ThemeToggle />
      <div
        className="relative flex items-center gap-2 cursor-pointer"
        onClick={() => setIsProfileOpen((prev) => !prev)}
      >
        <div className="flex flex-col justify-center gap-1 text-xs text-right">
          <p className="text-text-primary font-bold">Isabella Bennett</p>
          <span className="text-text-secondary">Designer</span>
        </div>
        <img src={hero} alt="hero" className="w-10 h-10 rounded-full" />
        {isProfileOpen && (
          <div className="absolute w-50 text-xs top-[115%] right-0 bg-bg-secondary shadow-xs border border-border-color rounded-xs">
            {profileLinks.map((link) => (
              <Link
                key={link.id}
                to={link.url}
                className="flex items-center gap-2 p-2 hover:bg-bg-primary rounded-xs"
              >
                {link.icon}
                <span className="text-text-secondary">{link.title}</span>
              </Link>
            ))}
            <button className="w-full flex items-center gap-2 p-2 hover:bg-bg-primary rounded-xs cursor-pointer">
              <MdLogout size={18} className="text-status-error" />
              <span className="text-status-error">Logout</span>
            </button>
          </div>
        )}
      </div>
      {isNotificationPanelOpen && (
        <Notification setIsOpen={setIsNotificationPanelOpen} />
      )}
      {isChatPanelOpen && <Chat setIsOpen={setIsChatPanelOpen} />}
      {isCartPanelOpen && <Cart setIsOpen={setIsCartPanelOpen} />}
    </header>
  );
};

export default Header;
