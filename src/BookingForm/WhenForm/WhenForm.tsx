import "../BookingPage.css";

interface WhenFormProps {
  setNumberOfPeople: React.Dispatch<React.SetStateAction<number>>;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  onLaneChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export const WhenForm: React.FC<WhenFormProps> = ({
  setNumberOfPeople,
  onDateChange,
  onTimeChange,
  onLaneChange,
}) => {
  const generateDateOption = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const formattedDate = date.toISOString().split("T")[0];
      dates.push(
        <option key={formattedDate} value={formattedDate}>
          {formattedDate}
        </option>
      );
    }
    return dates;
  };

  const generateTimeOption = () => {
    const time = [];
    for (let hour = 12; hour < 21; hour++) {
      for (let minute of [0, 30]) {
        const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;

        time.push(
          <option key={formattedTime} value={formattedTime}>
            {formattedTime}
          </option>
        );
      }
    }
    return time;
  };

  const generateNumberOfPeopleOption = () => {
    const numbOfPeople = [];
    for (let people = 1; people < 9; people++) {
      numbOfPeople.push(
        <option key={people} value={people}>
          {people}
        </option>
      );
    }
    return numbOfPeople;
  };

  const handleNumberOfPeople = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNumberOfPeople(Number(event.target.value));
  };

  const generateLaneOptions = () => {
    const numbOfLanes = [];
    for (let lane = 1; lane < 3; lane++) {
      numbOfLanes.push(
        <option key={lane} value={lane}>
          {lane}
        </option>
      );
    }
    return numbOfLanes;
  };

  return (
    <>
      <div className="sub-heading-container">
        <div className="line"></div>

        <div className="sub-heading">WHEN, WHAT AND WHO</div>
        <div className="line"></div>
      </div>
      <div className="input-container">
        {/* Datum */}
        <div className="input-wrapper short-input">
          <select
            id="date"
            className="input"
            defaultValue=""
            onChange={(e) => onDateChange(e.target.value)}
          >
            <option value="" disabled hidden></option>
            <option value="option1">Välj Datum</option>
            {generateDateOption()}
          </select>
          <label htmlFor="date" className="floating-label">
            DATE
          </label>
        </div>

        {/* Tid */}
        <div className="input-wrapper short-input">
          <select
            id="time"
            className="input"
            defaultValue=""
            onChange={(e) => onTimeChange(e.target.value)}
          >
            <option value="" disabled hidden></option>
            <option value="option1">Välj Tid</option>
            {generateTimeOption()}
          </select>
          <label htmlFor="time" className="floating-label">
            TIME
          </label>
        </div>

        {/* Antalet personer */}
        <div className="input-wrapper long-input">
          <select
            onChange={handleNumberOfPeople}
            id="long1"
            className="input"
            defaultValue=""
          >
            <option value="" disabled hidden></option>
            <option value="option1"></option>
            {generateNumberOfPeopleOption()}
          </select>
          <label htmlFor="long1" className="floating-label">
            WHO
          </label>
        </div>

        {/* BANOR */}
        <div className="input-wrapper long-input">
          <select
            id="long2"
            className="input"
            defaultValue=""
            onChange={onLaneChange}
          >
            <option value="" disabled hidden></option>
            <option value="option1"></option>
            {generateLaneOptions()}
          </select>
          <label htmlFor="long2" className="floating-label">
            LANES
          </label>
        </div>
      </div>
    </>
  );
};
