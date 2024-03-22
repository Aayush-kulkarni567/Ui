import React, { useState } from 'react';
import Dashboard from './Dashboard/Pages/dashboard';
import Sidebar from './Dashboard/Pages/sidebar';

function App() {
    const [showDashboard, setShowDashboard] = useState(true);

    const handleLinkClick = () => {
        setShowDashboard(false);
    };

    const handleDashboardClick = () => {
        setShowDashboard(true);
    };

    return (
        <>
            <div>
                <Sidebar
                    onDashboardClick={handleDashboardClick}
                    onLinkClick={handleLinkClick}
                />
                <div className="main-content">
                    {showDashboard && <Dashboard />}
                </div>
            </div>
        </>
    );
}

export default App;
