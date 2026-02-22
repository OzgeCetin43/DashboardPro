import { nanoid } from "nanoid";
import { FaUser } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineAccountTree } from "react-icons/md";
import { FaInfo } from "react-icons/fa";

type ProfileLink = {
  id: string;
  icon: React.ReactNode;
  title: string;
  url: string;
};

export const profileLinks: ProfileLink[] = [
  {
    id: nanoid(),
    icon: <FaUser size={18} />,
    title: "My Profile",
    url: "/my-profile",
  },
  {
    id: nanoid(),
    icon: <IoIosSettings size={18} />,
    title: "Settings",
    url: "/settings",
  },
  {
    id: nanoid(),
    icon: <MdOutlineAccountTree size={18} />,
    title: "My Account",
    url: "/my-account",
  },
  {
    id: nanoid(),
    icon: <FaInfo size={18} />,
    title: "Knowledge Base",
    url: "/knowledge-base",
  },
];
