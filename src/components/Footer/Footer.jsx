import "./Footer.scss";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <img src={logo} alt="Marine ERP logo" width={132} height={23} />
          <div>
            <div className="footer__links">
              <a href="/">Home</a>
              <a href="/">Services</a>
              <a href="https://marine-web.vercel.app/contact" target="_blank">About Us</a>
              <a href="https://marine-web.vercel.app/contact" target="_blank">Contact Us</a>
            </div>
            <a href="/terms" className="termsMobile">
              Terms of conditions
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <div>© 2024 Marine ERP. All Rights Reserved.</div>
          <a href="/terms">Terms of conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
