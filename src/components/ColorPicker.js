import React, { useState } from "react";
import "./ColorPicker.css";

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showBoxes, setShowBoxes] = useState(false);

  const boxColors = [
    "#fe0000",
    "#00ff01",
    "#0000fe",
    "#ffff00",
    "#ff00fe",
    "#00ffff",
    "#fea500",
    "#81007f",
    "#ffc0cb",
    "#027d03",
    "#ff6146",
    "#01ced1",
    "#8b4512",
    "#ff8b00",
    "#4682b4",
    "#fed700",
  ];

  const handleBoxClick = (color) => {
    setSelectedColor(color);
    setShowBoxes(false);
  };

  const handlePickButtonClick = () => {
    if (selectedColor) {
      setSelectedColor(null);
      setShowBoxes(true);
    } else {
      setShowBoxes(true);
    }
  };

  return (
    <div className="colorpicker">
      <h1 className="titlecolorpicker">Color Picker</h1>
      {showBoxes ? <div className="pinkboxcolorpicker"></div> : null}
      {showBoxes && (
        <table>
          <tr className="flex1">
            {boxColors.map((color, index) => (
              <td key={index}>
                <div
                  className="boxes"
                  style={{ background: color }}
                  id={`box${index + 1}`}
                  onClick={() => handleBoxClick(color)}
                ></div>
              </td>
            ))}
          </tr>
        </table>
      )}
      {selectedColor ? (
        <button
          className="Pick"
          style={{
            background: selectedColor,
            backgroundColor: "#45ae51",
          }}
          onClick={handlePickButtonClick}
        >
          Pick a Color
        </button>
      ) : (
        <button
          className="Pick"
          style={{
            background: selectedColor,
            backgroundColor: "#45ae51",
          }}
          onClick={handlePickButtonClick}
        >
          Pick a Color
        </button>
      )}
    </div>
  );
}

export default ColorPicker;
