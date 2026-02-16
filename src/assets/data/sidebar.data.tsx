import { nanoid } from "nanoid";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { FaAppStoreIos } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { ImPagebreak } from "react-icons/im";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";

type SidebarType = {
  id: string;
  name: string;
  label: string;
  icon: React.ReactNode;
};

export const sidebar: SidebarType[] = [
  {
    id: nanoid(),
    name: "dashboards",
    label: "Dashboards",
    icon: <MdOutlineStackedBarChart size={18} />,
  },
  {
    id: nanoid(),
    name: "apps",
    label: "Apps",
    icon: <FaAppStoreIos size={18} />,
  },
  {
    id: nanoid(),
    name: "authentication",
    label: "Authentication",
    icon: <FaLock size={18} />,
  },
  {
    id: nanoid(),
    name: "pages",
    label: "Pages",
    icon: <ImPagebreak size={18} />,
  },
  {
    id: nanoid(),
    name: "landing",
    label: "Landing",
    icon: <BsRocketTakeoffFill size={18} />,
  },
  {
    id: nanoid(),
    name: "miscellaneous",
    label: "Miscellaneous",
    icon: <BiSolidDashboard size={18} />,
  },
];
