import React, { useState } from "react";
import Dashboard from "./Dashboard/Pages/dashboard";
import Sidebar from "./Dashboard/Pages/sidebar";

function App() {
  const [showDashboard, setShowDashboard] = useState(true);

  const handleLinkClick = () => {
    setShowDashboard(false);
  };

  const handleDashboardClick = () => {
    setShowDashboard(true);
  };

  const [hideDashboard, setHideDashboard] = useState(false);

  const toggleSideBard = () => {
    setHideDashboard(!hideDashboard);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen md:flex-row">
        {hideDashboard && (
          <Sidebar
            onDashboardClick={handleDashboardClick}
            onLinkClick={handleLinkClick}
          />
        )}
        <div className="flex bg-gray-100 h-full w-full">
          <div className="main-content h-full w-full">
            {showDashboard && <Dashboard toggleSideBard={toggleSideBard} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
