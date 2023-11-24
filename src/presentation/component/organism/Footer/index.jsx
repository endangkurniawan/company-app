import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Logo from "presentation/component/atom/Logo";

const Footer = () => {
  const navData = {
    Company: [
      { txt: "About Us", link: "#" },
      { txt: "Success Stories", link: "#" },
      { txt: "Privacy Policy", link: "#" },
      { txt: "Terms & Conditions", link: "#" },
      { txt: "Contact Us", link: "#" },
    ],
    Services: [
      { txt: "Hire Permanent Staff", link: "#" },
      { txt: "Staff Augmentation", link: "#" },
      { txt: "Software Outsourcing", link: "#" },
      { txt: "Build Remote Office", link: "#" },
    ],
    "How to Start": [
      { txt: "You Asked", link: "#" },
      { txt: "We Proceed", link: "#" },
      { txt: "Negotiate", link: "#" },
      { txt: "You Get", link: "#" },
    ],
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="footer__box">
          <div className="footer__menu">
            {Object.entries(navData).map(([title, items]) => (
              <div key={title} className="footer__menu__wrapper">
                <h5 className="footer__menu__title">{title}</h5>
                <ul className="footer__nav">
                  {items.map(({ txt, link }, idx) => (
                    <li key={idx} className="footer__nav__item">
                      <Link className="footer__nav__link" to={link}>
                        {txt}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer__logo">
            <Link className="footer__logo__link" to="#">
              <Logo fileName="logo 1.png" alt="Logo Company" className="footer__logo__el" />
            </Link>
            <p className="footer__desc">Expertly trained, battle-tested, elite software developers on demand</p>
          </div>
        </div>
        <div className="footer__copyright">
          <p>&copy; {new Date().getFullYear()} courtney</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
