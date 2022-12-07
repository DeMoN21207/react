import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostFilter/CostFilter";
import React, { useState } from "react";
import CostList from "./CostList/CostList";
import CostsDiagram from "./CostDiagram/CostsDiagram";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const changeYear = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.obj.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter onChangeYear={changeYear} year={selectedYear} />
        <CostsDiagram costs={filteredCosts} />
        <CostList filteredCosts={filteredCosts} />
      </Card>
    </div>
  );
}

export default Costs;
