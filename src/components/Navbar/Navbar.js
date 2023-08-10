import React, { useEffect, useState } from "react";
import DarkMode from "../DarkMode";
// import Brand from "../../images/jp.png";

const Nav = (props) => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => handleShow(window.scrollY > 100);
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <strong className='nav__logo'>
        <span>J</span>p
      </strong>
      <nav className='nav-links'>
        <ul>
          <li>
            <a href='#profile'>Profile</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
        </ul>
      </nav>
      {!props.switchDisabled && <DarkMode />}
    </div>
  );
};

export default Nav;
