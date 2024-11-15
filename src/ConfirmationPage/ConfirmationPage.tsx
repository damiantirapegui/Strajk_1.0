import "./ConfirmationPage.css";
import { DynamicButton } from "../BookingForm/DynamicButton/DynamicButton";
import { NavMenu } from "../Menu/NavMenu";
import { useLocation, useNavigate } from "react-router-dom";
import { BookingResponse } from "../BookingForm/BookingPage";

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookinData = location.state as BookingResponse;

  const handleButton = () => {
    navigate("/booking");
  };

  if (!bookinData) {
    return (
      <div className="confirm">
        <header className="booking-form-header">
          <NavMenu />
          <div className="logo-booking-container confirm-logo">
            <img src="./logo/logo.png" style={{ width: "76px" }} alt="" />
          </div>
        </header>
        <div className="sub-heading-container shoes-container on-confirm">
          <div className="line"></div>
          <div className="sub-heading">NO BOOKING DETAILS</div>
          <div className="line"></div>
        </div>
        <section className="confirmation-error">
          <p>No booking details found. Please make a booking first.</p>
        </section>

        <div className="button-container">
          <button
            className="button-for-confirmation-error"
            onClick={handleButton}
          >
            BOOK NOW!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="confirm">
      <header className="booking-form-header">
        <NavMenu />
        <div className="logo-booking-container confirm-logo">
          <img src="./logo/logo.png" style={{ width: "76px" }} alt="" />
        </div>
      </header>

      <div className="sub-heading-container shoes-container on-confirm">
        <div className="line"></div>

        <div className="sub-heading">BOOKING DETALIS</div>
        <div className="line"></div>
      </div>

      <section className="confirmation-section">
        <div className="confirmation-wrapper">
          <label htmlFor="information" className="response-label">
            WHEN
          </label>

          <div className="confirmation">{bookinData.when}</div>
        </div>

        <div className="confirmation-wrapper">
          <label htmlFor="information" className="response-label">
            WHO
          </label>
          <div className="confirmation">{bookinData.people}</div>
        </div>

        <div className="confirmation-wrapper">
          <label htmlFor="information" className="response-label">
            LANES
          </label>
          <div className="confirmation">{bookinData.lanes}</div>
        </div>

        <div className="confirmation-wrapper">
          <label htmlFor="information" className="response-label">
            BOOKING NUMBER
          </label>
          <div className="confirmation">{bookinData.id}</div>
        </div>

        <div className="confirmation-wrapper">
          <div className="confirmation total-cost">
            <p className="price-info">total</p>
            <p className="price-info">{bookinData.price}sek</p>
          </div>
        </div>
      </section>

      <DynamicButton onClick={() => {}} disabled={false} />
    </div>
  );
};

export default ConfirmationPage;
