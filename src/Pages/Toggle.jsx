import Login from "./login";
import Dashboard from "./Dashboard/Dashboard";
import { useState } from "react";

function Toggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Simulate logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="p-10">
        {isLoggedIn ? (
          <Dashboard onLogout={handleLogout} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </>
  );
}
export default Toggle;
