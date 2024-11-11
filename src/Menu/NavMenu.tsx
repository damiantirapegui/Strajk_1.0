import { useState } from "react";
import "./NavMenu.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const menuVariants = {
  hidden: { x: "-100%" },
  visible: { x: "0%" },
};

export const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <>
      <section className="nav-menu-section">
        <div className="hamburger-menu">
          <img
            className="hamburger-menu"
            src="./logo/hamburger.png"
            style={{ width: "52px" }}
            alt=""
            onClick={toggleMenu}
          />
        </div>

        <motion.nav
          className="nav-window"
          initial="hidden"
          animate={showMenu ? "visible" : "hidden"}
          variants={menuVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Link className="link" to="/booking">
            BOOKING
          </Link>
          <Link className="link" to="/confirm">
            CONFIRMATION
          </Link>
        </motion.nav>
      </section>
    </>
  );
};
