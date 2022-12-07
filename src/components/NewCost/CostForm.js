import "./CostForm.css";
import React, { useState } from "react";

const CostForm = (props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      description: name,
      price: amount,
      date: new Date(date)
    };
    props.onSaveCostData(costData);

    setName('');
    setDate('');
    setAmount('')
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" onChange={nameChangeHandler} value={name} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit"> Добавить расход</button>
          <button type="button" onClick={props.onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
