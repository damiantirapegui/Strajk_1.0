import { useState } from "react";
import "./NavMenu.css";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const handleNavigateToConfirm = () => {
    navigate("/confirm");
  };

  const handleNavigateToBooking = () => {
    navigate("/booking");
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
          <p className="link" onClick={handleNavigateToBooking}>
            BOOKING
          </p>
          <p className="link" onClick={handleNavigateToConfirm}>
            CONFIRMATION
          </p>
        </motion.nav>
      </section>
    </>
  );
};
