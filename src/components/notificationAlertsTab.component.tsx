import React from "react";

import warningIcon from "../assets/images/warning-icon.png";

const NotificationAlertsTab: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-full text-center text-xs">
      <img src={warningIcon} alt="warning" className="w-30 h-30" />
      <p className="font-bold text-text-primary">All caught up!</p>
      <p className="text-text-secondary">
        You don't have any new alerts right now. Keep an eye here for updates.
      </p>
    </div>
  );
};

export default NotificationAlertsTab;
