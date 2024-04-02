import React from "react";
export const Item = ({ item, setItems }) => {
  const formatCounter = (count) => {
    return count === 0 ? "empty" : count;
  };

  const getBAdgesClasses = (count) => {
    let classes = "badge m-2 ";
    return count === 0 ? classes + "bg-warning" : classes + "bg-primary";
  };
  const handleRemoveItems = (id) => {
    setItems((items) => items.filter((item) => id !== item.id));
  };
  const handleIncrement = (id) => {
    setItems((prevState) =>
      prevState.map((item) => {
        if (id === item.id) {
          return { ...item, count: item.count + 1 };
        } else return item;
      })
    );
  };

  const handleDecrement = (id) => {
    setItems((prevState) => {
      return prevState.map((item) => {
        if (item.count === 0) {
          return item;
        }
        if (id === item.id) {
          return { ...item, count: item.count - 1 };
        } else return item;
      });
    });
  };
  return (
    <div key={item.id} className="d-flex justify-content-between row">
      <div className="col">{item.name}</div>
      <div className="col align-items-center d-flex justify-content-center">
        <div className={getBAdgesClasses(item.count)}>
          {formatCounter(item.count)}
        </div>
      </div>
      <div className="col">
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            handleIncrement(item.id);
          }}
        >
          +
        </button>
        <button
          className="btn btn-primary m-2 "
          onClick={() => {
            handleDecrement(item.id);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            handleRemoveItems(item.id);
          }}
          className="btn btn-secondary "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash3"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
          </svg>
          <i className="bi bi-trash3"> удалить</i>
        </button>
      </div>
    </div>
  );
};
