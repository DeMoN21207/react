import "./CostItem.css";
import "../DateItem/DateItem.js";
import Card from "../../UI/Card.js";
import DateItem from "../DateItem/DateItem.js";
import React, {useState} from "react";

function CostItem(props) {
  

  const [description, setDisctription] = useState(props.description);
  
  const click = () => { 
    
    setDisctription('new Val');
  
  }

  return (
    <Card className="cost-item">
      <DateItem props={props.date} />
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${props.price}</div>
      </div>
      <button onClick={click}>Press Me!</button>
    </Card>
  );
}

export default CostItem;
