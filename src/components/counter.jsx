import React, { useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    { id: 1, name: "ненужая вещь", count: 0 },
    { id: 2, name: "Ложка", count: 0 },
    { id: 3, name: "Вилка", count: 0 },
    { id: 4, name: "Тарелка", count: 0 },
    { id: 5, name: "набор минималиста", count: 0 },
  ]);

  const formatCounter = (count) => {
    console.log(count);
    return count === 0 ? "empty" : count;
  };

  const getBAdgesClasses = (count) => {
    let classes = "badge m-2 ";
    return count === 0 ? classes + "bg-warning" : classes + "bg-primary";
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
    if (count > 0) {
      setItems((item) => item.count - 1);
    }
  };
  const renderTAgs = () => {
    if (items.length > 0) {
      return (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                handleRemoveItems(item.id);
              }}
            >
              {item.name}
              <div className={getBAdgesClasses()}>
                {formatCounter(item.count)}
              </div>
              <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleIncrement}
              >
                +
              </button>
              <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleDecrement}
              >
                -
              </button>
              <button onClick={handleRemoveItems}>удалить</button>
            </div>
          ))}
        </>
      );
    } else return <span>no items</span>;
  };
  const handleResetItems = () => {
    setItems([]);
  };
  const handleRemoveItems = (id) => {
    setItems((items) => items.filter((item) => id !== item.id));
  };

  const clearCounter = () => {
    items.map((item) => {
      item.count = 0;
    });
  };

  return (
    <div className="container ">
      <nav className="navbar navbar-expand-lg bg-body-tertiary"></nav>{" "}
      {items.length > 0 ? (
        items.map((item) => (
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
                onClick={() => handleIncrement(item.id)}
              >
                +
              </button>
              <button
                className="btn btn-primary m-2 "
                onClick={handleDecrement}
              >
                -
              </button>
              <button
                onClick={() => handleRemoveItems(item.id)}
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
        ))
      ) : (
        <div>no items</div>
      )}
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
          <button className="btn btn-primary" onClick={handleResetItems}>
            очистить
          </button>
          <button className="btn btn-primary m-2" onClick={clearCounter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-clockwise"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
            </svg>
            <i class="bi bi-arrow-clockwise">refresh</i>
          </button>
        </div>
      </div>
    </div>
  );
};
