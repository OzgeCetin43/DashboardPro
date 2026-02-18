import { nanoid } from "nanoid";
import { FaUsers, FaLayerGroup } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";
import { MdRememberMe } from "react-icons/md";
import { IoCalendarSharp } from "react-icons/io5";

type SettingsLinkType = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

export const settingsLinks: SettingsLinkType[] = [
  {
    id: nanoid(),
    name: "Invite Users",
    icon: <FaUsers size={18} />,
  },
  {
    id: nanoid(),
    name: "Team Settings",
    icon: <LuSettings2 size={18} />,
  },
  {
    id: nanoid(),
    name: "Find Members",
    icon: <MdRememberMe size={18} />,
  },
  {
    id: nanoid(),
    name: "Meetings",
    icon: <IoCalendarSharp size={18} />,
  },
  {
    id: nanoid(),
    name: "Group Settings",
    icon: <FaLayerGroup size={18} />,
  },
];
