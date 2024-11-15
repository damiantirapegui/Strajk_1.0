import { useState, useEffect } from "react";
import { NavMenu } from "../Menu/NavMenu";
import "./BookingPage.css";
import { DynamicButton } from "./DynamicButton/DynamicButton";
import { ShoesForm } from "./ShoesForm/ShoesForm";
import { WhenForm } from "./WhenForm/WhenForm";
import { useNavigate } from "react-router-dom";

export interface BookingResponse {
  when: string;
  lanes: number;
  shoes: number[];
  price: number;
  id: string;
  active: boolean;
  people: number;
}

export const BookingForm: React.FC = () => {
  const [numberOfPeople, setNumberOfPeople] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedLane, setSelectedLane] = useState<number>(1);
  const [shoeSizes, setShoeSizes] = useState<number[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  // Function to uppdate different values

  const handleDateChange = (date: string) => setSelectedDate(date);
  const handleTimeChange = (time: string) => setSelectedTime(time);
  const handleLaneChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setSelectedLane(Number(event.target.value));
  };

  // Validation
  useEffect(() => {
    const maxPlayersAllowed = selectedLane * 4;
    if (numberOfPeople > maxPlayersAllowed) {
      setErrorMessage(
        `vänligen välj 2 banor för ${numberOfPeople} spelare. Max 4 per bana`
      );
    } else if (shoeSizes.length !== numberOfPeople) {
      setErrorMessage(`Du måste ange exakt ${numberOfPeople} skostorlekar`);
    } else {
      setErrorMessage(null);
    }
  }, [numberOfPeople, selectedLane, shoeSizes]);

  const handleBookingSubmit = async () => {
    if (errorMessage) {
      return;
    }
    const bookingData = {
      when: selectedDate + "T" + selectedTime,
      lanes: selectedLane,
      people: numberOfPeople,
      shoes: shoeSizes,
    };

    try {
      const response = await fetch(
        "https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com",
        {
          method: "POST",
          headers: {
            "x-api-key": "738c6b9d-24cf-47c3-b688-f4f4c5747662",
          },
          body: JSON.stringify(bookingData),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status ${response.status}`);
      }

      const data: BookingResponse = await response.json();
      console.log("Booking successful:", data);
      navigate("/confirm", { state: data });
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <div className="booking">
      <header className="booking-form-header">
        <NavMenu />
        <div className="logo-booking-container">
          <img src="./logo/logo.png" style={{ width: "76px" }} alt="" />
        </div>
      </header>
      <WhenForm
        setNumberOfPeople={setNumberOfPeople}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
        onLaneChange={handleLaneChange}
      />
      {errorMessage && (
        <div className="message-body">
          <div className="message-container">
            <p className="error-message">{errorMessage}</p>
          </div>
        </div>
      )}
      <ShoesForm
        numberOfPeople={numberOfPeople}
        setShoesSize={setShoeSizes}
        shoesSize={shoeSizes}
      />
      <DynamicButton onClick={handleBookingSubmit} disabled={!!errorMessage} />
    </div>
  );
};
