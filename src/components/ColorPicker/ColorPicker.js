import React from 'react';
import './ColorPicker.css';

// const styles = {
//     option: {
//         display: 'inline-block',
//         width: 40,
//         height: 40,
//         margin: 2
//     }
// }

const ColorPicker = ({ options }) => {
  console.log(options);
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">ColorPicker</h2>
      <div>
        {options.map(({ label, color }) => {
          return (
            <span
              className="ColorPicker__option"
              style={{ backgroundColor: color }}
              key={label}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPicker;
