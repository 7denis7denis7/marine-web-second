import "./Header.scss";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import cross from "../../assets/cross.svg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="header__inner">
          <a href="/">Home</a>
          <a href="/#services">Services</a>
          <a href="https://marine-web.vercel.app/contact" target="_blank">
            About Us
          </a>
          <a href="https://marine-web.vercel.app/contact" target="_blank">
            Contact Us
          </a>
          <button
            className="mobile-btn"
            aria-label="Open Mobile Menu"
            onClick={toggleMenu}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
                fill="white"
              />
            </svg>
          </button>
        </nav>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <button
            className="mobile-btn"
            aria-label="Close Mobile Menu"
            onClick={toggleMenu}
          >
            <img src={cross} alt="close" />
          </button>
          <div className="mobile-menu__inner">
            <a href="/">
              <img src={logo} alt="Marine ERP logo" width={253} height={45} />
            </a>
            <nav className="mobile-nav">
              <a className="link" href="/">
                Home
              </a>
              <a className="link" href="/#services">
                Services
              </a>
              <a className="link" href="https://marine-web.vercel.app/contact" target="_blank" onClick={toggleMenu}>
                About Us
              </a>
            </nav>
            <a href="https://marine-web.vercel.app/contact" target="_blank" className="button">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
