import { nanoid } from "nanoid";

type AuthenticationLinkType = {
  id: string;
  name: string;
  path?: string;
  subMenu?: {
    id: string;
    name: string;
    path: string;
  }[];
};

export const authenticationLinks: AuthenticationLinkType[] = [
  {
    id: nanoid(),
    name: "Classic",
    subMenu: [
      {
        id: nanoid(),
        name: "Sign In",
        path: "/authentication/classic/sign-in",
      },
      {
        id: nanoid(),
        name: "Sign Up",
        path: "/authentication/classic/sign-up",
      },
      {
        id: nanoid(),
        name: "2FA",
        path: "/authentication/classic/2fa",
      },
      {
        id: nanoid(),
        name: "Check Email",
        path: "/authentication/classic/check-email",
      },
      {
        id: nanoid(),
        name: "Reset Password Enter Email",
        path: "/authentication/classic/reset-password-enter-email",
      },
      {
        id: nanoid(),
        name: "Reset Password Check Email",
        path: "/authentication/classic/reset-password-check-email",
      },
      {
        id: nanoid(),
        name: "Reset Password Password Change",
        path: "/authentication/classic/reset-password-password-change",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Branded",
    subMenu: [
      {
        id: nanoid(),
        name: "Sign In",
        path: "/authentication/branded/sign-in",
      },
      {
        id: nanoid(),
        name: "Sign Up",
        path: "/authentication/branded/sign-up",
      },
      {
        id: nanoid(),
        name: "2FA",
        path: "/authentication/branded/2fa",
      },
      {
        id: nanoid(),
        name: "Check Email",
        path: "/authentication/branded/check-email",
      },
      {
        id: nanoid(),
        name: "Reset Password Enter Email",
        path: "/authentication/branded/reset-password-enter-email",
      },
      {
        id: nanoid(),
        name: "Reset Password Check Email",
        path: "/authentication/branded/reset-password-check-email",
      },
      {
        id: nanoid(),
        name: "Reset Password Password Change",
        path: "/authentication/branded/reset-password-password-change",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Account Deactivated",
    path: "/authentication/account-deactivated",
  },
  {
    id: nanoid(),
    name: "Email Verification",
    path: "/authentication/email-verification",
  },
  {
    id: nanoid(),
    name: "Successfull Password",
    path: "/authentication/successfull-password",
  },
  {
    id: nanoid(),
    name: "Password Create",
    path: "/authentication/password-create",
  },
  {
    id: nanoid(),
    name: "Lock Screen",
    path: "/authentication/lock-screen",
  },
  {
    id: nanoid(),
    name: "Recover Password",
    path: "/authentication/recover-password",
  },
  {
    id: nanoid(),
    name: "Unlock User",
    path: "/authentication/unlock-user",
  },
  {
    id: nanoid(),
    name: "Bad Request",
    path: "/authentication/bad-request",
  },
  {
    id: nanoid(),
    name: "Forbidden",
    path: "/authentication/forbidden",
  },
  {
    id: nanoid(),
    name: "Error 404 (Not Found)",
    path: "/authentication/error-404-not-found",
  },
  {
    id: nanoid(),
    name: "Error 500 (Internal Server Error)",
    path: "/authentication/error-500-internal-server-error",
  },
  {
    id: nanoid(),
    name: "Service Unavailable",
    path: "/authentication/service-unavailable",
  },
];
