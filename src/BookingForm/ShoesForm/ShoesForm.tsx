import "../BookingPage.css";

interface ShoeFormProps {
  numberOfPeople: number;
  setShoesSize: (size: number[]) => void;
  shoesSize: number[];
}

export const ShoesForm: React.FC<ShoeFormProps> = ({
  numberOfPeople,
  setShoesSize,
  shoesSize,
}) => {
  const generateShoeSizeOptions = () => {
    const shoeSizes = [];
    for (let size = 36; size < 45; size++) {
      shoeSizes.push(
        <option key={size} value={size}>
          {size}
        </option>
      );
    }
    return shoeSizes;
  };

  const handleShoeSizeChange = (index: number, value: number) => {
    const updatedShoeSizes = [...shoesSize];
    updatedShoeSizes[index] = value;
    setShoesSize(updatedShoeSizes);
  };

  return (
    <>
      <div className="sub-heading-container shoes-container">
        <div className="line"></div>

        <div className="sub-heading">Shoes</div>
        <div className="line"></div>
      </div>

      <div className="input-container-shoes">
        {[...Array(numberOfPeople)].map((_, index) => (
          <div key={index} className="input-wrapper short-input">
            <select
              id={`shoeSize-${index}`}
              className="input"
              defaultValue=""
              onChange={(e) =>
                handleShoeSizeChange(index, parseInt(e.target.value))
              }
            >
              <option value="" disabled hidden>
                Välj Skostorlek
              </option>
              {generateShoeSizeOptions()}
            </select>
            <label htmlFor={`shoeSize-${index}`} className="floating-label">
              SHOE SIZE / PERSON {index + 1}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
