import CostItem from "../CostItem/CostItem";

const CostList = (props) => {
  if (props.filteredCosts.length === 0) {
    return <p>В этом году расходов нет</p>;
  }
  if (props.filteredCosts.length > 0) {
    return (
      <ul className="cost-list">
        {props.filteredCosts.map((val) => (
          <CostItem
            key={val.id}
            date={val.date}
            price={val.price}
            description={val.description}
          />
        ))}
      </ul>
    );
  }
};

export default CostList;
