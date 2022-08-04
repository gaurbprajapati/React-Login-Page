// import React, { useState } from "react";

// function App() {
//   const [headingText, setHeadingText] = useState("Hello");
//   const [isMousedOver, setMouseOver] = useState(false);

//   function handleClick() {
//     setHeadingText("Submitted");
//   }

//   function handleMouseOver() {
//     setMouseOver(true);
//   }

//   function handleMouseOut() {
//     setMouseOver(false);
//   }

//   return (
//     <div className="container">
//       <h1>{headingText}</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button
//         style={{ backgroundColor: isMousedOver ? "black" : "white" }}
//         onClick={handleClick}
//         onMouseOver={handleMouseOver}
//         onMouseOut={handleMouseOut}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// export default App;

// OR-------------->>>>OR ------------>>>>

import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [color, setcolor] = useState("white");
  function change() {
    setHeadingText("submitted");
  }

  const onmouseover = () => {
    setcolor("black");
  };

  const overmouse = () => {
    setcolor("white");
  };

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: color }}
        onClick={change}
        onMouseOver={onmouseover}
        onMouseOut={overmouse}
      >
        Submit
      </button>
    </div>
  );
}

export default App;










// import React, { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [namech, setNamech] = useState("");

//   function toggle(value) {
//     // const s = event.target.value;
//     // console.log(s);
//     setName(event.target.value);
//   }

//   function toggleAdd() {
//     setNamech(name);
//   }
//   return (
//     <div className="container">
//       <h1>Hello {namech} </h1>
//       <input
//         onChange={toggle}
//         value={name}
//         type="text"
//         placeholder="What's your name?"
//       />
//       <button onClick={toggleAdd}>Submit</button>
//     </div>
//   );
// }

// export default App;

