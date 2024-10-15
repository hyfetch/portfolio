import React, { useState } from 'react';

export default function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="notification-banner">
        <button className="dismiss-button" onClick={handleDismiss}>
          &times;
        </button>
        <p>
          Nothing here :3
        </p>
      </div>
    )
  );
}
