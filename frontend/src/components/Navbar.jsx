import React, { useRef, useState } from 'react'
import { navbarStyles } from '../assets/dummyStyles.js'
import img1 from '../assets/logo.png'
import { ChevronDown } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = ({ user: propUser, onLogout }) => {

  const navigate = useNavigate();
  const menuRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  const user = propUser || {
    name: "",
    email: "",
  }

  const toggleMenu = () => setMenuOpen((prev) => !prev);


  return (
    <header className={navbarStyles.header}>
      <div className={navbarStyles.container}>
        {/* logo */}
        <div
          onClick={() => navigate("/")}
          className={navbarStyles.logoContainer}
        >

          <div className={navbarStyles.logoImage}>
            <img src={img1} alt='logo' />
          </div>
          <span className={navbarStyles.logoText}>Expense Tracker</span>
        </div>

        { /* if the user is present */}
        {user && (
          <div className={navbarStyles.userContainer} ref={menuRef}>
            <button onClick={toggleMenu} className={navbarStyles.userButton}>
              <div className="relative">
                <div className={navbarStyles.userAvatar}>
                  {user?.name?.[0]?.toUpperCae() || "U"}
                </div>
                <div className={navbarStyles.statusIndicator}></div>
              </div>
              <div className={navbarStyles.userTextContainer}>
                <p className={navbarStyles.userName}>{user?.Name || "User"}</p>
                <p className={navbarStyles.userEmail}>
                  {user?.email || "user@expensetracker.com"}
                </p>
              </div>
              <ChevronDown className={navbarStyles.chevronIcon(menuOpen)} />
            </button>

            {/* dropdown mmenu */}
            {menuOpen && (
              <div className={navbarStyles.dropdownMenu}>
                <div className={navbarStyles.dropdownHeader}>
                  <div className="flex items-center gap-3">
                    <div className={navbarStyles.dropdownAvatar}>
                      {user?.name?.[0]?.toUpperCase() || "U"}
                    </div>

                    <div>
                      <div className={navbarStyles.dropdownName}>
                        {user?.name || "User"}
                      </div>
                      <div className={navbarStyles.dropdownEmail}>
                        {user?.email || "user@expensetracker.com"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={navbarStyles.menuItemContainer}>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      navigate("/profile");
                    }}
                    className={navbarStyles.menuItem}
                  >
                    <user className="w-4 h-4" />
                    <span>My Profile</span>
                  </button>
                </div>

                <div className={navbarStyles.menuItemsBorder}>
                    <button onClick={handleLogout} className={navbarStyles.logoutButton}>
                      <LogOut className="w-4 h-4" />
                      <span>Log Out</span>
                    </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar