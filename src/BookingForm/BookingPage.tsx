import { useState } from "react";
import { NavMenu } from "../Menu/NavMenu";
import "./BookingPage.css";
import { DynamicButton } from "./DynamicButton/DynamicButton";
import { ShoesForm } from "./ShoesForm/ShoesForm";
import { WhenForm } from "./WhenForm/WhenForm";

export const BookingForm: React.FC = () => {
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);

  return (
    <div className="booking">
      <header className="booking-form-header">
        <NavMenu />
        <div className="logo-booking-container">
          <img src="./logo/logo.png" style={{ width: "76px" }} alt="" />
        </div>
      </header>
      <WhenForm setNumberOfPeople={setNumberOfPeople} />
      <ShoesForm numberOfPeople={numberOfPeople} />
      <DynamicButton />
    </div>
  );
};
