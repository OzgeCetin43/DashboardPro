import { nanoid } from "nanoid";

type AppLinkType = {
  id: string;
  name: string;
  path?: string;
  subMenu?: {
    id: string;
    name: string;
    path: string;
  }[];
};

export const appLinks: AppLinkType[] = [
  {
    id: nanoid(),
    name: "Calendar",
    subMenu: [
      {
        id: nanoid(),
        name: "Default",
        path: "/apps/calendar/default",
      },
      {
        id: nanoid(),
        name: "Week Numbers",
        path: "/apps/calendar/week-numbers",
      },
      {
        id: nanoid(),
        name: "Localize",
        path: "/apps/calendar/localize",
      },
      {
        id: nanoid(),
        name: "Day View",
        path: "/apps/calendar/day-view",
      },
      {
        id: nanoid(),
        name: "List View",
        path: "/apps/calendar/list-view",
      },
      {
        id: nanoid(),
        name: "Time Grid View",
        path: "/apps/calendar/time-grid-view",
      },
      {
        id: nanoid(),
        name: "Multi-Month Stack",
        path: "/apps/calendar/multi-month-stack",
      },
      {
        id: nanoid(),
        name: "Multi-Month Grid",
        path: "/apps/calendar/multi-month-grid",
      },
      {
        id: nanoid(),
        name: "Timeline",
        path: "/apps/calendar/timeline",
      },
      {
        id: nanoid(),
        name: "Date Nav Link",
        path: "/apps/calendar/date-nav-link",
      },
      {
        id: nanoid(),
        name: "Clicking & Selecting",
        path: "/apps/calendar/clicking-and-selecting",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Email",
    subMenu: [
      {
        id: nanoid(),
        name: "Mailbox",
        path: "/apps/email/mailbox",
      },
      {
        id: nanoid(),
        name: "Welcome Templates",
        path: "/apps/email/welcome-templates",
      },
      {
        id: nanoid(),
        name: "Newsletter Templates",
        path: "/apps/email/newsletter-templates",
      },
      {
        id: nanoid(),
        name: "Read Email",
        path: "/apps/email/read-email",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Kanban",
    path: "/apps/kanban",
  },
  {
    id: nanoid(),
    name: "Social Media",
    subMenu: [
      {
        id: nanoid(),
        name: "Profile",
        path: "/apps/social-media/profile",
      },
      {
        id: nanoid(),
        name: "Activities",
        path: "/apps/social-media/activities",
      },
      {
        id: nanoid(),
        name: "Friend List",
        path: "/apps/social-media/friend-list",
      },
      {
        id: nanoid(),
        name: "Friend Profile",
        path: "/apps/social-media/friend-profile",
      },
      {
        id: nanoid(),
        name: "Inbox",
        path: "/apps/social-media/inbox",
      },
      {
        id: nanoid(),
        name: "Compose",
        path: "/apps/social-media/compose",
      },
      {
        id: nanoid(),
        name: "View",
        path: "/apps/social-media/view",
      },
      {
        id: nanoid(),
        name: "Settings",
        path: "/apps/social-media/settings",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Credit Card",
    subMenu: [
      {
        id: nanoid(),
        name: "Card Center",
        path: "/apps/credit-card/card-center",
      },
      {
        id: nanoid(),
        name: "Transactions",
        path: "/apps/credit-card/transactions",
      },
      {
        id: nanoid(),
        name: "Transaction Details",
        path: "/apps/credit-card/transaction-details",
      },
      {
        id: nanoid(),
        name: "Invoices",
        path: "/apps/credit-card/invoices",
      },
      {
        id: nanoid(),
        name: "My Wallet",
        path: "/apps/credit-card/my-wallet",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Restaurant",
    subMenu: [
      {
        id: nanoid(),
        name: "Menu List",
        path: "/apps/restaurant/menu-list",
      },
      {
        id: nanoid(),
        name: "Order List",
        path: "/apps/restaurant/order-list",
      },
      {
        id: nanoid(),
        name: "Order Details",
        path: "/apps/restaurant/order-details",
      },
      {
        id: nanoid(),
        name: "Table Manage",
        path: "/apps/restaurant/table-manage",
      },
      {
        id: nanoid(),
        name: "Customers Feedback",
        path: "/apps/restaurant/customers-feedback",
      },
      {
        id: nanoid(),
        name: "Analytics",
        path: "/apps/restaurant/analytics",
      },
      {
        id: nanoid(),
        name: "POS System",
        path: "/apps/restaurant/pos-system",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Hotel",
    subMenu: [
      {
        id: nanoid(),
        name: "Room List",
        path: "/apps/hotel/room-list",
      },
      {
        id: nanoid(),
        name: "Room Details",
        path: "/apps/hotel/room-details",
      },
      {
        id: nanoid(),
        name: "Room Booking",
        path: "/apps/hotel/room-booking",
      },
      {
        id: nanoid(),
        name: "Booking List",
        path: "/apps/hotel/booking-list",
      },
      {
        id: nanoid(),
        name: "Guest List",
        path: "/apps/hotel/guest-list",
      },
      {
        id: nanoid(),
        name: "Guest Profile",
        path: "/apps/hotel/guest-profile",
      },
      {
        id: nanoid(),
        name: "Accounting",
        path: "/apps/hotel/accounting",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Chat",
    subMenu: [
      {
        id: nanoid(),
        name: "Default",
        path: "/apps/chat/default",
      },
      {
        id: nanoid(),
        name: "Group",
        path: "/apps/chat/group",
      },
      {
        id: nanoid(),
        name: "Video Call",
        path: "/apps/chat/video-call",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Ecommerce",
    subMenu: [
      {
        id: nanoid(),
        name: "Product List View",
        path: "/apps/ecommerce/product-list-view",
      },
      {
        id: nanoid(),
        name: "Product Grid View",
        path: "/apps/ecommerce/product-grid-view",
      },
      {
        id: nanoid(),
        name: "Product Add New",
        path: "/apps/ecommerce/product-add-new",
      },
      {
        id: nanoid(),
        name: "Product Overview",
        path: "/apps/ecommerce/product-overview",
      },
      {
        id: nanoid(),
        name: "Category List",
        path: "/apps/ecommerce/category-list",
      },
      {
        id: nanoid(),
        name: "Orders List View",
        path: "/apps/ecommerce/orders-list-view",
      },
      {
        id: nanoid(),
        name: "Orders Overview",
        path: "/apps/ecommerce/orders-overview",
      },
      {
        id: nanoid(),
        name: "Orders Track",
        path: "/apps/ecommerce/orders-track",
      },
      {
        id: nanoid(),
        name: "Customers List View",
        path: "/apps/ecommerce/customers-list-view",
      },
      {
        id: nanoid(),
        name: "Customers Overview",
        path: "/apps/ecommerce/customers-overview",
      },
      {
        id: nanoid(),
        name: "Shop",
        path: "/apps/ecommerce/shop",
      },
      {
        id: nanoid(),
        name: "Shop Cart",
        path: "/apps/ecommerce/shop-cart",
      },
      {
        id: nanoid(),
        name: "Checkout",
        path: "/apps/ecommerce/checkout",
      },
      {
        id: nanoid(),
        name: "Wishlist",
        path: "/apps/ecommerce/wishlist",
      },
      {
        id: nanoid(),
        name: "Payment",
        path: "/apps/ecommerce/payment",
      },
      {
        id: nanoid(),
        name: "Manage Reviews",
        path: "/apps/ecommerce/manage-reviews",
      },
      {
        id: nanoid(),
        name: "Pricing",
        path: "/apps/ecommerce/pricing",
      },
    ],
  },
  {
    id: nanoid(),
    name: "File Manager",
    subMenu: [
      {
        id: nanoid(),
        name: "Folders",
        path: "/apps/file-manager/folders",
      },
      {
        id: nanoid(),
        name: "Files",
        path: "/apps/file-manager/files",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Projects",
    subMenu: [
      {
        id: nanoid(),
        name: "List View",
        path: "/apps/projects/list-view",
      },
      {
        id: nanoid(),
        name: "Grid View",
        path: "/apps/projects/grid-view",
      },
      {
        id: nanoid(),
        name: "Overview",
        path: "/apps/projects/overview",
      },
      {
        id: nanoid(),
        name: "Create New",
        path: "/apps/projects/create-new",
      },
      {
        id: nanoid(),
        name: "Roadmap",
        path: "/apps/projects/roadmap",
      },
      {
        id: nanoid(),
        name: "Task",
        path: "/apps/projects/task",
      },
      {
        id: nanoid(),
        name: "Files",
        path: "/apps/projects/files",
      },
      {
        id: nanoid(),
        name: "Users",
        path: "/apps/projects/users",
      },
      {
        id: nanoid(),
        name: "Create New",
        path: "/apps/projects/create-new",
      },
    ],
  },
  {
    id: nanoid(),
    name: "CRM",
    subMenu: [
      {
        id: nanoid(),
        name: "Lead",
        path: "/apps/crm/lead",
      },
      {
        id: nanoid(),
        name: "Contact",
        path: "/apps/crm/contact",
      },
      {
        id: nanoid(),
        name: "Deal",
        path: "/apps/crm/deal",
      },
      {
        id: nanoid(),
        name: "Companies",
        path: "/apps/crm/companies",
      },
      {
        id: nanoid(),
        name: "Pipeline",
        path: "/apps/crm/pipeline",
      },
      {
        id: nanoid(),
        name: "Analytics",
        path: "/apps/crm/analytics",
      },
      {
        id: nanoid(),
        name: "Activities",
        path: "/apps/crm/activities",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Events",
    subMenu: [
      {
        id: nanoid(),
        name: "Events List",
        path: "/apps/events/events-list",
      },
      {
        id: nanoid(),
        name: "Events Grid",
        path: "/apps/events/events-grid",
      },
      {
        id: nanoid(),
        name: "Overview",
        path: "/apps/events/overview",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Hospital Management",
    subMenu: [
      {
        id: nanoid(),
        name: "Patients List View",
        path: "/apps/hospital-management/patients-list-view",
      },
      {
        id: nanoid(),
        name: "Add Patient",
        path: "/apps/hospital-management/add-patient",
      },
      {
        id: nanoid(),
        name: "Patient Profile",
        path: "/apps/hospital-management/patient-profile",
      },
      {
        id: nanoid(),
        name: "Staff List View",
        path: "/apps/hospital-management/staff-list-view",
      },
      {
        id: nanoid(),
        name: "Staff Leaves",
        path: "/apps/hospital-management/staff-leaves",
      },
      {
        id: nanoid(),
        name: "Staff Add Leave",
        path: "/apps/hospital-management/staff-add-leave",
      },
      {
        id: nanoid(),
        name: "Holidays",
        path: "/apps/hospital-management/holidays",
      },
      {
        id: nanoid(),
        name: "Staff Attendance",
        path: "/apps/hospital-management/staff-attendance",
      },
      {
        id: nanoid(),
        name: "Appointments List View",
        path: "/apps/hospital-management/appointments-list-view",
      },
      {
        id: nanoid(),
        name: "Book Appointment",
        path: "/apps/hospital-management/book-appointment",
      },
      {
        id: nanoid(),
        name: "Doctor Schedule",
        path: "/apps/hospital-management/doctor-schedule",
      },
      {
        id: nanoid(),
        name: "Departments",
        path: "/apps/hospital-management/departments",
      },
      {
        id: nanoid(),
        name: "Employee Salary",
        path: "/apps/hospital-management/employee-salary",
      },
      {
        id: nanoid(),
        name: "Payslip",
        path: "/apps/hospital-management/payslip",
      },
    ],
  },
  {
    id: nanoid(),
    name: "School",
    subMenu: [
      {
        id: nanoid(),
        name: "All Students",
        path: "/apps/school/all-students",
      },
      {
        id: nanoid(),
        name: "Students Overview",
        path: "/apps/school/students-overview",
      },
      {
        id: nanoid(),
        name: "Students Admission Form",
        path: "/apps/school/students-admission-form",
      },
      {
        id: nanoid(),
        name: "All Teachers",
        path: "/apps/school/all-teachers",
      },
      {
        id: nanoid(),
        name: "Teachers Overview",
        path: "/apps/school/teachers-overview",
      },
      {
        id: nanoid(),
        name: "Teachers Payroll",
        path: "/apps/school/teachers-payroll",
      },
      {
        id: nanoid(),
        name: "Parents List",
        path: "/apps/school/parents-list",
      },
      {
        id: nanoid(),
        name: "Library Book",
        path: "/apps/school/library-book",
      },
      {
        id: nanoid(),
        name: "Attendances",
        path: "/apps/school/attendances",
      },
      {
        id: nanoid(),
        name: "Exam Schedule",
        path: "/apps/school/exam-schedule",
      },
      {
        id: nanoid(),
        name: "Exam Questions",
        path: "/apps/school/exam-questions",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Invoices",
    subMenu: [
      {
        id: nanoid(),
        name: "List View",
        path: "/apps/invoices/list-view",
      },
      {
        id: nanoid(),
        name: "Grid View",
        path: "/apps/invoices/grid-view",
      },
      {
        id: nanoid(),
        name: "Add New",
        path: "/apps/invoices/add-new",
      },
      {
        id: nanoid(),
        name: "Detail",
        path: "/apps/invoices/detail",
      },
      {
        id: nanoid(),
        name: "Edit",
        path: "/apps/invoices/edit",
      },
      {
        id: nanoid(),
        name: "Overview 1",
        path: "/apps/invoices/overview-1",
      },
      {
        id: nanoid(),
        name: "Overview 2",
        path: "/apps/invoices/overview-2",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Users",
    subMenu: [
      {
        id: nanoid(),
        name: "Profile",
        path: "/apps/users/profile",
      },
      {
        id: nanoid(),
        name: "Edit",
        path: "/apps/users/edit",
      },
      {
        id: nanoid(),
        name: "Cards",
        path: "/apps/users/cards",
      },
      {
        id: nanoid(),
        name: "Followers",
        path: "/apps/users/followers",
      },
      {
        id: nanoid(),
        name: "Friends",
        path: "/apps/users/friends",
      },
      {
        id: nanoid(),
        name: "Gallery",
        path: "/apps/users/gallery",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Bookmarks",
    path: "/apps/bookmarks",
  },
  {
    id: nanoid(),
    name: "Contacts",
    path: "/apps/contacts",
  },
  {
    id: nanoid(),
    name: "Tasks",
    path: "/apps/tasks",
  },
  {
    id: nanoid(),
    name: "To-Do",
    path: "/apps/to-do",
  },
  {
    id: nanoid(),
    name: "Search Results",
    path: "/apps/search-results",
  },
  {
    id: nanoid(),
    name: "Courses",
    path: "/apps/courses",
  },
  {
    id: nanoid(),
    name: "Employee",
    path: "/apps/employee",
  },
  {
    id: nanoid(),
    name: "HRM",
    subMenu: [
      {
        id: nanoid(),
        name: "Employee Lists",
        path: "/apps/hrm/employee-lists",
      },
      {
        id: nanoid(),
        name: "Employee Grid",
        path: "/apps/hrm/employee-grid",
      },
      {
        id: nanoid(),
        name: "Employee Details",
        path: "/apps/hrm/employee-details",
      },
      {
        id: nanoid(),
        name: "Departments",
        path: "/apps/hrm/departments",
      },
      {
        id: nanoid(),
        name: "Designations",
        path: "/apps/hrm/designations",
      },
      {
        id: nanoid(),
        name: "Policies",
        path: "/apps/hrm/policies",
      },
      {
        id: nanoid(),
        name: "Ticket Automation",
        path: "/apps/hrm/ticket-automation",
      },
      {
        id: nanoid(),
        name: "Tickets",
        path: "/apps/hrm/tickets",
      },
      {
        id: nanoid(),
        name: "Ticket Details",
        path: "/apps/hrm/ticket-details",
      },
      {
        id: nanoid(),
        name: "Ticket Reports",
        path: "/apps/hrm/ticket-reports",
      },
      {
        id: nanoid(),
        name: "Holidays",
        path: "/apps/hrm/holidays",
      },
      {
        id: nanoid(),
        name: "Leaves (Admin)",
        path: "/apps/hrm/leaves-admin",
      },
      {
        id: nanoid(),
        name: "Leaves (Employee)",
        path: "/apps/hrm/leaves-employee",
      },
      {
        id: nanoid(),
        name: "Leave Settings",
        path: "/apps/hrm/leave-settings",
      },
      {
        id: nanoid(),
        name: "Attendance (Admin)",
        path: "/apps/hrm/attendance-admin",
      },
      {
        id: nanoid(),
        name: "Attendance (Employee)",
        path: "/apps/hrm/attendance-employee",
      },
      {
        id: nanoid(),
        name: "Timesheets",
        path: "/apps/hrm/timesheets",
      },
      {
        id: nanoid(),
        name: "Shift & Schedule",
        path: "/apps/hrm/shift-and-schedule",
      },
      {
        id: nanoid(),
        name: "Shift Swap Requests",
        path: "/apps/hrm/shift-swap-requests",
      },
      {
        id: nanoid(),
        name: "Overtime",
        path: "/apps/hrm/overtime",
      },
      {
        id: nanoid(),
        name: "Holiday Calendar",
        path: "/apps/hrm/holiday-calendar",
      },
      {
        id: nanoid(),
        name: "WFH Management",
        path: "/apps/hrm/wfh-management",
      },
      {
        id: nanoid(),
        name: "Performance Indicator",
        path: "/apps/hrm/performance-indicator",
      },
      {
        id: nanoid(),
        name: "Performance Review",
        path: "/apps/hrm/performance-review",
      },
      {
        id: nanoid(),
        name: "Performance Appraisal",
        path: "/apps/hrm/performance-appraisal",
      },
      {
        id: nanoid(),
        name: "Goal List",
        path: "/apps/hrm/goal-list",
      },
      {
        id: nanoid(),
        name: "Goal Type",
        path: "/apps/hrm/goal-type",
      },
      {
        id: nanoid(),
        name: "Training List",
        path: "/apps/hrm/training-list",
      },
      {
        id: nanoid(),
        name: "Trainers",
        path: "/apps/hrm/trainers",
      },
      {
        id: nanoid(),
        name: "Training Type",
        path: "/apps/hrm/training-type",
      },
      {
        id: nanoid(),
        name: "Certification Tracking",
        path: "/apps/hrm/certification-tracking",
      },
      {
        id: nanoid(),
        name: "Learning Analytics",
        path: "/apps/hrm/learning-analytics",
      },
      {
        id: nanoid(),
        name: "Probation Management",
        path: "/apps/hrm/probation-management",
      },
      {
        id: nanoid(),
        name: "Notice Period Tracker",
        path: "/apps/hrm/notice-period-tracker",
      },
      {
        id: nanoid(),
        name: "Promotion",
        path: "/apps/hrm/promotion",
      },
      {
        id: nanoid(),
        name: "Resignation",
        path: "/apps/hrm/resignation",
      },
      {
        id: nanoid(),
        name: "Termination",
        path: "/apps/hrm/termination",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Recruitment",
    subMenu: [
      {
        id: nanoid(),
        name: "Jobs",
        path: "/apps/recruitment/jobs",
      },
      {
        id: nanoid(),
        name: "Candidates",
        path: "/apps/recruitment/candidates",
      },
      {
        id: nanoid(),
        name: "Referrals",
        path: "/apps/recruitment/referrals",
      },
      {
        id: nanoid(),
        name: "Resume Parsing",
        path: "/apps/recruitment/resume-parsing",
      },
      {
        id: nanoid(),
        name: "Campus Hiring",
        path: "/apps/recruitment/campus-hiring",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Accounting",
    subMenu: [
      {
        id: nanoid(),
        name: "Categories",
        path: "/apps/accounting/categories",
      },
      {
        id: nanoid(),
        name: "Budgets",
        path: "/apps/accounting/budgets",
      },
      {
        id: nanoid(),
        name: "Budget Expenses",
        path: "/apps/accounting/budget-expenses",
      },
      {
        id: nanoid(),
        name: "Budget Revenue",
        path: "/apps/accounting/budget-revenue",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Sales",
    subMenu: [
      {
        id: nanoid(),
        name: "Estimates",
        path: "/apps/sales/estimates",
      },
      {
        id: nanoid(),
        name: "Invoices",
        path: "/apps/sales/invoices",
      },
      {
        id: nanoid(),
        name: "Payments",
        path: "/apps/sales/payments",
      },
      {
        id: nanoid(),
        name: "Expenses",
        path: "/apps/sales/expenses",
      },
      {
        id: nanoid(),
        name: "Provident Fund",
        path: "/apps/sales/provident-fund",
      },
      {
        id: nanoid(),
        name: "Taxes",
        path: "/apps/sales/taxes",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Notes",
    path: "/apps/notes",
  },
  {
    id: nanoid(),
    name: "Tickets",
    subMenu: [
      {
        id: nanoid(),
        name: "Default",
        path: "/apps/tickets/default",
      },
      {
        id: nanoid(),
        name: "Details",
        path: "/apps/tickets/details",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Blog",
    subMenu: [
      {
        id: nanoid(),
        name: "Default",
        path: "/apps/blog/default",
      },
      {
        id: nanoid(),
        name: "Post",
        path: "/apps/blog/post",
      },
      {
        id: nanoid(),
        name: "Detail",
        path: "/apps/blog/detail",
      },
      {
        id: nanoid(),
        name: "Add Blog",
        path: "/apps/blog/add-blog",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Profile",
    subMenu: [
      {
        id: nanoid(),
        name: "Default",
        path: "/apps/profile/default",
      },
      {
        id: nanoid(),
        name: "Settings",
        path: "/apps/profile/settings",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Team",
    path: "/apps/team",
  },
  {
    id: nanoid(),
    name: "API",
    path: "/apps/api",
  },
  {
    id: nanoid(),
    name: "FAQs",
    path: "/apps/faqs",
  },
  {
    id: nanoid(),
    name: "Pricing",
    path: "/apps/pricing",
  },
  {
    id: nanoid(),
    name: "Gallery",
    path: "/apps/gallery",
  },
  {
    id: nanoid(),
    name: "Review",
    path: "/apps/review",
  },
  {
    id: nanoid(),
    name: "Property",
    subMenu: [
      {
        id: nanoid(),
        name: "List View",
        path: "/apps/property/list-view",
      },
      {
        id: nanoid(),
        name: "Grid View",
        path: "/apps/property/grid-view",
      },
      {
        id: nanoid(),
        name: "Add Property",
        path: "/apps/property/add-property",
      },
      {
        id: nanoid(),
        name: "Details",
        path: "/apps/property/details",
      },
      {
        id: nanoid(),
        name: "Categories / Types",
        path: "/apps/property/categories-types",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Customers",
    subMenu: [
      {
        id: nanoid(),
        name: "List View",
        path: "/apps/customers/list-view",
      },
      {
        id: nanoid(),
        name: "Customer Details",
        path: "/apps/customers/customer-details",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Contact Requests",
    path: "/apps/contact-requests",
  },
  {
    id: nanoid(),
    name: "Agents & Agencies",
    subMenu: [
      {
        id: nanoid(),
        name: "List View",
        path: "/apps/agents-and-agencies/list-view",
      },
      {
        id: nanoid(),
        name: "Create Agent",
        path: "/apps/agents-and-agencies/create-agent",
      },
      {
        id: nanoid(),
        name: "Profile & Performance",
        path: "/apps/agents-and-agencies/profile-and-performance",
      },
      {
        id: nanoid(),
        name: "Agencies List",
        path: "/apps/agents-and-agencies/agencies-list",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Transactions",
    subMenu: [
      {
        id: nanoid(),
        name: "List View",
        path: "/apps/transactions/list-view",
      },
      {
        id: nanoid(),
        name: "Add Transaction",
        path: "/apps/transactions/add-transaction",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Tracking",
    path: "/apps/tracking",
  },
  {
    id: nanoid(),
    name: "Revenue",
    path: "/apps/revenue",
  },
  {
    id: nanoid(),
    name: "Booking",
    path: "/apps/booking",
  },
  {
    id: nanoid(),
    name: "Schedule",
    path: "/apps/schedule",
  },
  {
    id: nanoid(),
    name: "HR",
    subMenu: [
      {
        id: nanoid(),
        name: "Employee List",
        path: "/apps/hr/employee-list",
      },
      {
        id: nanoid(),
        name: "Employee Salary",
        path: "/apps/hr/employee-salary",
      },
      {
        id: nanoid(),
        name: "Payslip",
        path: "/apps/hr/payslip",
      },
      {
        id: nanoid(),
        name: "Attendance (HR)",
        path: "/apps/hr/attendance-hr",
      },
      {
        id: nanoid(),
        name: "Main Attendance",
        path: "/apps/hr/main-attendance",
      },
      {
        id: nanoid(),
        name: "Leave (HR)",
        path: "/apps/hr/leave-hr",
      },
      {
        id: nanoid(),
        name: "Leave (Employee)",
        path: "/apps/hr/leave-employee",
      },
      {
        id: nanoid(),
        name: "Add Leave",
        path: "/apps/hr/add-leave",
      },
      {
        id: nanoid(),
        name: "Performance",
        path: "/apps/hr/performance",
      },
      {
        id: nanoid(),
        name: "Holidays",
        path: "/apps/hr/holidays",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Podcast",
    subMenu: [
      {
        id: nanoid(),
        name: "Podcast List",
        path: "/apps/podcast/podcast-list",
      },
      {
        id: nanoid(),
        name: "Episode Manage",
        path: "/apps/podcast/episode-manage",
      },
      {
        id: nanoid(),
        name: "Audience Analytics",
        path: "/apps/podcast/audience-analytics",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Real Estate",
    subMenu: [
      {
        id: nanoid(),
        name: "Property List",
        path: "/apps/real-estate/property-list",
      },
      {
        id: nanoid(),
        name: "Property Details",
        path: "/apps/real-estate/property-details",
      },
      {
        id: nanoid(),
        name: "Add Property",
        path: "/apps/real-estate/add-property",
      },
      {
        id: nanoid(),
        name: "Agents",
        path: "/apps/real-estate/agents",
      },
      {
        id: nanoid(),
        name: "Clients",
        path: "/apps/real-estate/clients",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Calls",
    subMenu: [
      {
        id: nanoid(),
        name: "Voice Call",
        path: "/apps/calls/voice-call",
      },
      {
        id: nanoid(),
        name: "Video Call",
        path: "/apps/calls/video-call",
      },
      {
        id: nanoid(),
        name: "Outgoing Call",
        path: "/apps/calls/outgoing-call",
      },
      {
        id: nanoid(),
        name: "Incoming Call",
        path: "/apps/calls/incoming-call",
      },
      {
        id: nanoid(),
        name: "Call History",
        path: "/apps/calls/call-history",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Social Feed",
    path: "/apps/social-feed",
  },
];
