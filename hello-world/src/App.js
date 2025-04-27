// import React, { useMemo, useState } from "react";

// // Child Component
// const Child = React.memo(({ items }) => {
//   console.log("👶 Child Rendered");
//   return (
//     <ul>
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// });

// // Parent Component
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [search, setSearch] = useState("");

//   const fruits = ["apple", "banana", "mango", "orange", "graphes"];

//   //   // ❌ No useMemo: filtering runs on every render
//   const filteredFruits = fruits.filter((fruit) =>
//     fruit.toLowerCase().includes(search.toLowerCase())
//   );
//   console.log("🔍 Filtering fruits (no useMemo)");

//   // ✅ useMemo to memoize the filtered list
//   // const filteredFruits = useMemo(() => {
//   //     console.log('🔍 Filtering fruits (useMemo)');
//   //     return fruits.filter(fruit =>
//   //       fruit.toLowerCase().includes(search.toLowerCase())
//   //     );
//   //   }, [search]);
//   return (
//     <div>
//       <h2>❌ Without useMemo</h2>
//       <input
//         type="text"
//         placeholder="Search fruit..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <br />
//       <button onClick={() => setCount(count + 1)}>
//         Re-render Parent ({count})
//       </button>

//       <Child items={filteredFruits} />
//     </div>
//   );
// };

// export default App;

// import React, { useState, useCallback } from "react";

// // Child Component
// const Child = React.memo(({ onClick }) => {
//   console.log("👶 Child Rendered");
//   return (
//     <div>
//       <button onClick={onClick}>Click from Child</button>
//     </div>
//   );
// });

// // Parent Component
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [clicks, setClicks] = useState(0);

//   // ❌ Without useCallback: function gets recreated on every render
//   // const handleClick = () => {
//   //   console.log("🧠 handleClick called");
//   //   setClicks((prev) => prev + 1);
//   // };

//   // ✅ With useCallback (comment out the above and uncomment below to test)
//   const handleClick = useCallback(() => {
//     console.log("🧠 handleClick (useCallback) called");
//     setClicks((prev) => prev + 1);
//   }, []);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <h3>Clicks from Child: {clicks}</h3>
//       <button onClick={() => setCount(count + 1)}>Re-render Parent</button>

//       <Child onClick={handleClick} />
//     </div>
//   );
// };

// export default App;

import React, { useState, useContext, createContext } from "react";

// 1️⃣ Context create karo
const CounterContext = createContext(null);

const App = () => {
  const [count, setCount] = useState(0);

  return (
    // 2️⃣ Provider se wrap karo
    <CounterContext.Provider value={{ count, setCount }}>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>🚀 Context API - All in One File</h1>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
};

// Parent Component
const Parent = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div
      style={{ border: "1px solid gray", padding: "10px", marginTop: "10px" }}
    >
      <h2>👨‍👩‍👧 Parent {count}</h2>
      <Child />
    </div>
  );
};

// Child Component
const Child = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div
      style={{
        border: "1px solid lightgray",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <h3>🧒 {count}</h3>
      <GrandChild />
    </div>
  );
};

// GrandChild Component (Context ka use yahin hoga)
const GrandChild = () => {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div
      style={{ border: "1px dashed #aaa", padding: "10px", marginTop: "10px" }}
    >
      <h4>👶 GrandChild</h4>
      <p>
        Counter value: <strong>{count}</strong>
      </p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        ➕ Increment
      </button>
    </div>
  );
};

export default App;

// import React, { useRef } from 'react';

// const App = () => {
//   // useRef ka use input field ko refer karne ke liye
//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     inputRef.current.focus(); // Direct DOM access
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial' }}>
//       <h1>🔍 useRef Example - Input Focus</h1>
//       <input
//         ref={inputRef}
//         type="text"
//         placeholder="Type something..."
//         style={{ padding: '10px', fontSize: '16px' }}
//       />
//       <br /><br />
//       <button onClick={handleFocus}>🎯 Focus Input</button>
//     </div>
//   );
// };

// export default App;
