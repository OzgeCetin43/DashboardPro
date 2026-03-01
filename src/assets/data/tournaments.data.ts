import { nanoid } from "nanoid";

import tournament1 from "../images/tournament-1.jpg";
import tournament2 from "../images/tournament-2.jpg";
import tournament3 from "../images/tournament-3.jpg";
import tournament4 from "../images/tournament-4.jpg";
import tournament5 from "../images/tournament-5.jpg";
import logo1 from "../images/logo-1.svg";
import logo2 from "../images/logo-2.svg";
import logo3 from "../images/logo-3.svg";
import logo4 from "../images/logo-4.svg";
import logo5 from "../images/logo-5.svg";

type Tournament = {
  id: string;
  image: string;
  name: string;
  date: string;
  tags: string[];
  logo: string;
};

export const tournaments: Tournament[] = [
  {
    id: nanoid(),
    image: tournament1,
    name: "CyberStorm Cup",
    date: "WED, FEB 16, 12:30 CET",
    tags: ["CS 2", "PUBG", "RAID", "COID", "Fortnite"],
    logo: logo1,
  },
  {
    id: nanoid(),
    image: tournament2,
    name: "PixelPulse Showdown",
    date: "MON, MAR 2, 16:00 CET",
    tags: ["TERA", "MK11", "PUBG", "HOTS", "R6"],
    logo: logo2,
  },
  {
    id: nanoid(),
    image: tournament3,
    name: "NexusRift Masters",
    date: "SUN, APR 29, 11:00 CET",
    tags: ["HS", "Valorant", "Dota 2", "PUBG", "COD"],
    logo: logo3,
  },
  {
    id: nanoid(),
    image: tournament4,
    name: "CyberStorm Cup",
    date: "WED, FEB 16, 12:30 CET",
    tags: ["CS 2", "PUBG", "RAID", "COID", "Fortnite"],
    logo: logo4,
  },
  {
    id: nanoid(),
    image: tournament5,
    name: "PixelPulse Showdown",
    date: "MON, MAR 2, 16:00 CET",
    tags: ["TERA", "MK11", "PUBG", "HOTS", "R6"],
    logo: logo5,
  },
];
