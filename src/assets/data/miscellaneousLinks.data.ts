import { nanoid } from "nanoid";

type MiscellaneousLinkType = {
  id: string;
  name: string;
  path?: string;
  subMenu?: {
    id: string;
    name: string;
    path: string;
  }[];
};

export const miscellaneousLinks: MiscellaneousLinkType[] = [
  {
    id: nanoid(),
    name: "Gallery",
    subMenu: [
      {
        id: nanoid(),
        name: "Gallery Grid",
        path: "/miscellaneous/gallery-grid",
      },
      {
        id: nanoid(),
        name: "Gallery Grid Desc",
        path: "/miscellaneous/gallery-grid-desc",
      },
      {
        id: nanoid(),
        name: "Masonry Gallery",
        path: "/miscellaneous/masonry-gallery",
      },
      {
        id: nanoid(),
        name: "Masonry With Desc",
        path: "/miscellaneous/masonry-with-desc",
      },
      {
        id: nanoid(),
        name: "Hover Effects",
        path: "/miscellaneous/hover-effects",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Job Search",
    subMenu: [
      {
        id: nanoid(),
        name: "Cards View",
        path: "/miscellaneous/job-search/cards-view",
      },
      {
        id: nanoid(),
        name: "List View",
        path: "/miscellaneous/job-search/list-view",
      },
      {
        id: nanoid(),
        name: "Job Details",
        path: "/miscellaneous/job-search/job-details",
      },
      {
        id: nanoid(),
        name: "Apply",
        path: "/miscellaneous/job-search/apply",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Courses",
    subMenu: [
      {
        id: nanoid(),
        name: "Course List",
        path: "/miscellaneous/courses/course-list",
      },
      {
        id: nanoid(),
        name: "Course Details",
        path: "/miscellaneous/courses/course-details",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Knowledgebase",
    path: "/miscellaneous/knowledgebase",
  },
  {
    id: nanoid(),
    name: "Support Ticket",
    path: "/miscellaneous/support-ticket",
  },
  {
    id: nanoid(),
    name: "Learning",
    subMenu: [
      {
        id: nanoid(),
        name: "Learning List",
        path: "/miscellaneous/learning/learning-list",
      },
      {
        id: nanoid(),
        name: "Detailed Course",
        path: "/miscellaneous/learning/detailed-course",
      },
    ],
  },
];
