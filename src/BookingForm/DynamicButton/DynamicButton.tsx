import React from "react";
import "../BookingPage.css";
import { useLocation, useNavigate } from "react-router-dom";
import "./DynamicButton.css";

interface DynamicButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const DynamicButton: React.FC<DynamicButtonProps> = ({
  onClick,
  disabled,
}) => {
  const location = useLocation();
  const buttonText =
    location.pathname === "/booking" ? "STRIIIIIIKE!" : "SWEET, LET'S GO";

  const navigate = useNavigate();
  const booking = location.pathname === "/booking";

  const handleClick = () => {
    if (location.pathname === "/confirm") {
      navigate("/booking");
    } else {
      onClick();
    }
  };

  return (
    <div className="div button-container">
      <button
        type="button"
        className="dynamic-button"
        onClick={booking ? onClick : handleClick}
        disabled={disabled}
      >
        {buttonText}
      </button>
    </div>
  );
};
