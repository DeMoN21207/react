import "./DateItem.css";

function DateItem(props) {

     const month = props.props.toLocaleString("ru-RU", { month: "long" });
     const day = props.props.toLocaleString("ru-RU", { day: "2-digit" });
     const year = props.props.getFullYear();
   
  return (
    <div className="cost-date">
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__date">{day}</div>
    </div>
  );
}

export default DateItem;
