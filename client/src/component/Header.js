import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Nav,
  NavItem,
} from "reactstrap";
import {
  FaHome,
  FaPaintBrush,
  FaTint,
  FaUser,
  FaInfoCircle,
} from "react-icons/fa";
import Logo from "../component/Photos/logo.png";
import { Link, useLocation } from "react-router-dom";
import "../App.css"; // استيراد ملف CSS المخصص

function Header() {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const toggleOffcanvas = () => setOffcanvasOpen(!offcanvasOpen);
  const location = useLocation(); // لتحديد الصفحة الحالية

  return (
    <div>
      {/* شريط التنقل */}
      <Navbar light className="header">
        <NavbarBrand href="/" className="me-auto">
          <img src={Logo} alt="Logo" className="logo-img" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleOffcanvas} className="me-2" />
      </Navbar>

      {/* الشريط الجانبي */}
      <Offcanvas
        isOpen={offcanvasOpen}
        toggle={toggleOffcanvas}
        direction="start"
      >
        <OffcanvasHeader toggle={toggleOffcanvas}>
          <img src={Logo} alt="Logo" className="logo-img sidebar-logo" />
        </OffcanvasHeader>
        <OffcanvasBody>
          <Nav vertical className="nav">
            <NavItem
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link to="/" className="nav-link">
                <FaHome className="me-2" /> Home
              </Link>
            </NavItem>
            <NavItem
              className={`nav-item ${
                location.pathname === "/products" ? "active" : ""
              }`}
            >
              <Link to="/products" className="nav-link">
                <FaPaintBrush className="me-2" /> Lip Glosses
              </Link>
            </NavItem>
            <NavItem
              className={`nav-item ${
                location.pathname === "/Liptint" ? "active" : ""
              }`}
            >
              <Link to="/Liptint" className="nav-link">
                <FaTint className="me-2" /> Lip Tint
              </Link>
            </NavItem>
            <NavItem
              className={`nav-item ${
                location.pathname === "/profile" ? "active" : ""
              }`}
            >
              <Link to="/profile" className="nav-link">
                <FaUser className="me-2" /> Profile
              </Link>
            </NavItem>
            <NavItem
              className={`nav-item ${
                location.pathname === "/About" ? "active" : ""
              }`}
            >
              <Link to="/About" className="nav-link">
                <FaInfoCircle className="me-2" /> About Us
              </Link>
            </NavItem>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

export default Header;
