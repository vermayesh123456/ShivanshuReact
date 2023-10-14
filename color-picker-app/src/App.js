import React, { useState } from 'react';
import './App.css';

const colors = [
  'red',
  'green',
  'blue',
  'yellow',
  'orange',
  'purple',
  'pink',
  'brown',
  'cyan',
  'magenta',
  'teal',
  'lime',
  'olive',
  'navy',
  'maroon',
  'aquamarine',
  'coral',
  'crimson',
  'darkblue',
  'darkcyan',
  'darkgreen',
  'darkgrey',
  'darkorange',
  'darkred',
  'gold',
  'indigo',
  'lavender',
  'lightblue',
  'lightgreen',
  'lightgrey'
];
function App() {
  const [selectedColor, setSelectedColor] = useState('white');

  const changeColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
    
    <div className="App" style={{ backgroundColor: selectedColor }}>
      <h1>Select a Color</h1>
      <div className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={() => changeColor(color)}
          ></div>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
