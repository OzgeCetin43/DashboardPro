import { nanoid } from "nanoid";

type PageLinkType = {
  id: string;
  name: string;
  path?: string;
  subMenu?: {
    id: string;
    name: string;
    path: string;
  }[];
};

export const pageLinks: PageLinkType[] = [
  {
    id: nanoid(),
    name: "Profile",
    path: "/pages/profile",
  },
  {
    id: nanoid(),
    name: "Blogs",
    subMenu: [
      {
        id: nanoid(),
        name: "Blog List",
        path: "/pages/blogs/blog-list",
      },
      {
        id: nanoid(),
        name: "Blog Details",
        path: "/pages/blogs/blog-details",
      },
      {
        id: nanoid(),
        name: "Create Blog",
        path: "/pages/blogs/create-blog",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Pricing",
    subMenu: [
      {
        id: nanoid(),
        name: "Admim",
        path: "/pages/pricing/admin",
      },
      {
        id: nanoid(),
        name: "User",
        path: "/pages/pricing/user",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Privacy Policy",
    path: "/pages/privacy-policy",
  },
  {
    id: nanoid(),
    name: "Terms & Conditions",
    path: "/pages/terms-and-conditions",
  },
  {
    id: nanoid(),
    name: "Timeline",
    path: "/pages/timeline",
  },
  {
    id: nanoid(),
    name: "FAQs",
    path: "/pages/faqs",
  },
  {
    id: nanoid(),
    name: "Billing & Subscription",
    path: "/pages/billing-and-subscription",
  },
  {
    id: nanoid(),
    name: "Not Authorized",
    path: "/pages/not-authorized",
  },
  {
    id: nanoid(),
    name: "Comming Soon",
    path: "/pages/comming-soon",
  },
  {
    id: nanoid(),
    name: "Maintenance",
    path: "/pages/maintenance",
  },
  {
    id: nanoid(),
    name: "Error",
    path: "/pages/error",
  },
  {
    id: nanoid(),
    name: "Account",
    subMenu: [
      {
        id: nanoid(),
        name: "Default",
        path: "/pages/account/default",
      },
      {
        id: nanoid(),
        name: "Security",
        path: "/pages/account/security",
      },
      {
        id: nanoid(),
        name: "Billing & Plans",
        path: "/pages/account/billing-and-plans",
      },
      {
        id: nanoid(),
        name: "Notification",
        path: "/pages/account/notification",
      },
      {
        id: nanoid(),
        name: "Statements",
        path: "/pages/account/statements",
      },
      {
        id: nanoid(),
        name: "Logs",
        path: "/pages/account/logs",
      },
      {
        id: nanoid(),
        name: "Settings",
        path: "/pages/account/settings",
      },
    ],
  },
  {
    id: nanoid(),
    name: "User Profile",
    subMenu: [
      {
        id: nanoid(),
        name: "Overview",
        path: "/pages/user-profile/overview",
      },
      {
        id: nanoid(),
        name: "Activity",
        path: "/pages/user-profile/activity",
      },
      {
        id: nanoid(),
        name: "Followers",
        path: "/pages/user-profile/followers",
      },
      {
        id: nanoid(),
        name: "Documents",
        path: "/pages/user-profile/documents",
      },
      {
        id: nanoid(),
        name: "Notes",
        path: "/pages/user-profile/notes",
      },
      {
        id: nanoid(),
        name: "Projects",
        path: "/pages/user-profile/projects",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Contact Us",
    path: "/pages/contact-us",
  },
  {
    id: nanoid(),
    name: "Licenses",
    path: "/pages/licenses",
  },
  {
    id: nanoid(),
    name: "Help Center",
    path: "/pages/help-center",
  },
  {
    id: nanoid(),
    name: "Role Base Access",
    path: "/pages/role-base-access",
  },
  {
    id: nanoid(),
    name: "Treeview",
    path: "/pages/treeview",
  },
  {
    id: nanoid(),
    name: "Sitemap",
    path: "/pages/sitemap",
  },
  {
    id: nanoid(),
    name: "Portfolio",
    path: "/pages/portfolio",
  },
  {
    id: nanoid(),
    name: "Academy",
    path: "/pages/academy",
  },
  {
    id: nanoid(),
    name: "Trading",
    path: "/pages/trading",
  },
  {
    id: nanoid(),
    name: "Watchlist",
    path: "/pages/watchlist",
  },
];
