import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { AiOutlineArrowRight, AiOutlineDown } from "react-icons/ai";
import Logo from "presentation/component/atom/Logo";
import Button from "presentation/component/atom/Button";

const Header = () => {
  const dataDropdown = {
    services: [
      { text: "Hire Permanent Staff", link: "#" },
      { text: "Staff Augmentation", link: "#" },
      { text: "Software Outsourcing", link: "#" },
      { text: "Build Remote Office", link: "#" },
    ],
    technologies: [
      { text: "Frontend", link: "#" },
      { text: "Backend", link: "#" },
      { text: "Frameworks", link: "#" },
      { text: "Mobile App", link: "#" },
      { text: "Database", link: "#" },
      { text: "Google", link: "#" },
      { text: "Data Science", link: "#" },
      { text: "Machine Learning", link: "#" },
      { text: "DevOps", link: "#" },
      { text: "CMS", link: "#" },
      { text: "ECommerce", link: "#" },
      { text: "Security", link: "#" },
    ],
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link className="header__logo" to="/">
            <Logo fileName="logo 1.png" name="Logo Company" clas="header__logo__el" />
          </Link>
          <button className="burger-menu" type="button">
            <span className="burger-menu__bar" />
            <span className="burger-menu__bar" />
            <span className="burger-menu__bar" />
          </button>
          <div className="header__menu">
            <ul className="header__menu__list">
              <NavItem to="#" text="How to Start" />
              <DropdownItem text="Services" items={dataDropdown.services} />
              <DropdownItem text="Technologies" items={dataDropdown.technologies} />
              <NavItem to="#" text="Careers" />
            </ul>
          </div>
          <div className="header__nav">
            <Button variant="btn btn--secondary" type="button">
              BUILD A TEAM
              <span className="header__nav__arrow">
                <AiOutlineArrowRight />
              </span>
            </Button>
            <Link className="link" to="#">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ to, text }) => (
  <li className="header__menu__item">
    <Link className="link" to={to}>
      {text}
    </Link>
  </li>
);

const DropdownItem = ({ text, items }) => (
  <li className="header__menu__item">
    <Link className="link" to="#">
      {text}
      <span>
        <AiOutlineDown />
      </span>
    </Link>
    <ul className="header__menu__list">
      {items.map((item, idx) => (
        <NavItem key={`md-${idx}`} to={item.link} text={item.text} />
      ))}
    </ul>
  </li>
);

export default Header;
