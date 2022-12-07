import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    price: "888",
    description: "Холодильник",
    date: new Date("2022-08-2")
  },
  {
    id: "c2",
    price: "7877",
    description: "Микроволновка",
    date: new Date("2022-07-1")
  }
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = cost => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts];
    });
  };
  return (
    <div>
      <NewCost costHandler={addCostHandler} />
      <Costs obj={costs} />
    </div>
  );
}

export default App;
