import React from "react";
import Card from "./Card";
let mydata = [
  { name: "Abhishek", Age: 34 },
  { name: "Ashish", Age: 33 },
  { name: "Prashant", Age: 34 },
  { name: "Abhishek", Age: 35 },
];
const App = () => {
  return (
    <div>
      <Card data={mydata} />
    </div>
  );
};

export default App;
