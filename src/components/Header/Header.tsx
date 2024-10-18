import {
  faBars,
  faMinus,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage if menu is open
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleToggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="wrapper">
          <div className="logo">
            <NavLink to="/">Logo</NavLink>
          </div>
          <div className="menu-icon">
            {!isOpen ? (
              <FontAwesomeIcon
                icon={faBars}
                onClick={handleToggleMenu}
                className="icon"
              />
            ) : (
              <FontAwesomeIcon
                icon={faXmark}
                onClick={handleToggleMenu}
                className="icon"
              />
            )}
          </div>

          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li className="home__link">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeNav}
              >
                Home
              </NavLink>
            </li>
            <li className="about__link">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeNav}
              >
                About
              </NavLink>
            </li>
            <li className="project__link">
              <NavLink
                to="projects"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeNav}
              >
                Project
              </NavLink>
              {!isSubMenuOpen ? (
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={handleToggleSubMenu}
                  className="icon"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faMinus}
                  onClick={handleToggleSubMenu}
                  className="icon"
                />
              )}
              <ul className={`drop-sub__menu ${isSubMenuOpen ? "open" : ""}`}>
                <li>
                  <NavLink
                    to="/web-development"
                    className={({ isActive }) => (isActive ? "subActive" : "")}
                    onClick={() => {
                      closeNav();
                      closeSubMenu();
                    }}
                  >
                    Web Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/mobile-development"
                    className={({ isActive }) => (isActive ? "subActive" : "")}
                    onClick={() => {
                      closeNav();
                      closeSubMenu();
                    }}
                  >
                    Mobile Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/data-science"
                    className={({ isActive }) => (isActive ? "subActive" : "")}
                    onClick={() => {
                      closeNav();
                      closeSubMenu();
                    }}
                  >
                    Data Sciencs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/design"
                    className={({ isActive }) => (isActive ? "subActive" : "")}
                    onClick={() => {
                      closeNav();
                      closeSubMenu();
                    }}
                  >
                    Design
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="contact__link">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeNav}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
