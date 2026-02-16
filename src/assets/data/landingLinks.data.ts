import { nanoid } from "nanoid";

type LandingLinkType = {
  id: string;
  name: string;
  path: string;
};

export const landingLinks: LandingLinkType[] = [
  {
    id: nanoid(),
    name: "Home",
    path: "/landing/home",
  },
  {
    id: nanoid(),
    name: "About Us",
    path: "/landing/about-us",
  },
  {
    id: nanoid(),
    name: "Blog",
    path: "/landing/blog",
  },
  {
    id: nanoid(),
    name: "Blog Details",
    path: "/landing/blog-details",
  },
  {
    id: nanoid(),
    name: "Portfolio",
    path: "/landing/portfolio",
  },
  {
    id: nanoid(),
    name: "Pricing",
    path: "/landing/pricing",
  },
  {
    id: nanoid(),
    name: "ECommerce",
    path: "/landing/ecommerce",
  },
  {
    id: nanoid(),
    name: "Business",
    path: "/landing/business",
  },
  {
    id: nanoid(),
    name: "Contact",
    path: "/landing/contact",
  },
];
