import "./App.css";

import Draggable from "react-draggable"; // Both at the same time

function App() {
  const tiles = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty-one",
    "twenty-two",
    "twenty-three",
    "twenty-four",
    "twenty-five",
    "twenty-six",
    "twenty-seven",
    "twenty-eight",
    "twenty-nine",
    "thirty",
    "thirty-one",
    "thirty-two",
    "thirty-three",
    "thirty-four",
    "thirty-five",
    "thirty-six",
  ];

  const pieces = tiles.map((item, index) => {
    console.log(item)
    return (
      <div key={item} className="piece-container">
        {index < 6 ? (
          <Draggable>
            <div className={`puzzle piece-${item}`}></div>
          </Draggable>
        ) : (
          ""
        )}
        {index > 5 && index < 12 ? (
          <Draggable>
            <div className={`puzzle piece-${item}`}></div>
          </Draggable>
        ) : (
          ""
        )}
        {index > 11 && index < 18 ? (
          <div>
            <Draggable>
              <div className={`puzzle piece-${item}`}></div>
            </Draggable>
          </div>
        ) : (
          ""
        )}
        {index > 17 && index < 24 ? (
          <div>
            <Draggable>
              <div className={`puzzle piece-${item}`}></div>
            </Draggable>
          </div>
        ) : (
          ""
        )}
        {index > 23 && index < 30 ? (
          <div>
            <Draggable>
              <div className={`puzzle piece-${item}`}></div>
            </Draggable>
          </div>
        ) : (
          ""
        )}
        {index > 29 && index < 36 ? (
          <div>
            <Draggable>
              <div className={`puzzle piece-${item}`}></div>
            </Draggable>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  });

  return <div className="App">{pieces}</div>;
}

export default App;
