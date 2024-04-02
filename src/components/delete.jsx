import React from "react";
export const Delete = ({ setItems }) => {
  const handleResetItems = () => {
    setItems([
      { id: 1, name: "ненужая вещь", count: 0 },
      { id: 2, name: "Ложка", count: 0 },
      { id: 3, name: "Вилка", count: 0 },
      { id: 4, name: "Тарелка", count: 0 },
      { id: 5, name: "набор минималиста", count: 0 },
    ]);
  };

  const clearCounter = () => {
    setItems((prevState) => prevState.map((item) => ({ ...item, count: 0 })));
  };
  return (
    <div className="row">
      <div className="col"></div>
      <div className="col"></div>
      <div className="col">
        <button
          className="btn btn-primary"
          onClick={() => {
            handleResetItems();
          }}
        >
          очистить{" "}
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            clearCounter();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-clockwise"
            viewBox="0 0 16 16"
            style={{ transform: "rotate(45deg)" }}
          >
            <path
              fillRule="evenodd"
              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
          </svg>
          <i className="bi bi-arrow-clockwise">refresh</i>
        </button>
      </div>
    </div>
  );
};
