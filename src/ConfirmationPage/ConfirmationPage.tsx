import "./ConfirmationPage.css";
import { DynamicButton } from "../BookingForm/DynamicButton/DynamicButton";
import { NavMenu } from "../Menu/NavMenu";

const ConfirmationPage = () => {
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
          <div className="confirmation"></div>
        </div>

        <div className="confirmation-wrapper">
          <label htmlFor="information" className="response-label">
            WHEN
          </label>
          <div className="confirmation"></div>
        </div>

        <div className="confirmation-wrapper">
          <label htmlFor="information" className="response-label">
            WHEN
          </label>
          <div className="confirmation"></div>
        </div>

        <div className="confirmation-wrapper">
          <label htmlFor="information" className="response-label">
            WHEN
          </label>
          <div className="confirmation"></div>
        </div>

        <div className="confirmation-wrapper">
          <div className="confirmation total-cost">
            <p className="price-info">total</p>
            <p className="price-info">460sek</p>
          </div>
        </div>
      </section>

      <DynamicButton />
    </div>
  );
};

export default ConfirmationPage;
