import CostForm from "./CostForm";
import React, { useState } from "react";
import "./NewCost.css";
const NewCost = props => {
  const [ifFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = data => {
    const costData = {
      ...data,
      id: Math.random().toString()
    };
    
    props.costHandler(costData);  
    setIsFormVisible(false);
    
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = () => { 
    setIsFormVisible(false);
  }

  return (
    <div className="new-cost">
      {!ifFormVisible && (
        <button onClick={inputCostDataHandler}>Добавить новый расход</button>
      )}
      {ifFormVisible && (
        <CostForm
          onCancel={cancelCostHandler}
          onSaveCostData={saveCostDataHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
