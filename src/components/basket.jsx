import React, { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import { ItemList } from "./itemList";
import { Delete } from "./delete";
export const Basket = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    { id: 1, name: "ненужая вещь", count: 0 },
    { id: 2, name: "Ложка", count: 0 },
    { id: 3, name: "Вилка", count: 0 },
    { id: 4, name: "Тарелка", count: 0 },
    { id: 5, name: "набор минималиста", count: 0 },
  ]);
  useEffect(() => {
    setCount(items.reduce((acc, cur) => (acc += cur.count), 0));
  }, [items]);
  return (
    <div className="container ">
      <Navbar count={count} />
      {items.length > 0 ? (
        <ItemList items={items} setItems={setItems} />
      ) : (
        <div>no items</div>
      )}
      <Delete setItems={setItems} />
    </div>
  );
};
