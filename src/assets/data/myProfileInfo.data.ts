import { nanoid } from "nanoid";

import icon1 from "../images/profile-icon-1.svg";
import icon2 from "../images/profile-icon-2.svg";
import icon3 from "../images/profile-icon-3.svg";
import icon4 from "../images/profile-icon-4.svg";

type MyProfileInfo = {
  id: string;
  name: string;
  value: string;
  icon: string;
};

export const myProfileInfo: MyProfileInfo[] = [
  {
    id: nanoid(),
    name: "Tournaments",
    value: "164",
    icon: icon1,
  },
  {
    id: nanoid(),
    name: "Game Win-rate",
    value: "73.6%",
    icon: icon2,
  },
  {
    id: nanoid(),
    name: "Duels Played",
    value: "1.2K",
    icon: icon3,
  },
  {
    id: nanoid(),
    name: "Trophies",
    value: "500",
    icon: icon4,
  },
];
