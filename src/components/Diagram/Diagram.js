import DiagramBar from "./DiagramBar";
import "./Diagram.css";

const Diagram = (props) => {
  console.log(props.dataSet);
  const dataSetsValues = props.dataSet.map((val) => val.value);

  const maxMonthCost = Math.max(...dataSetsValues);

  return (
    <div className="diagram">
      {props.dataSet.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCost}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
