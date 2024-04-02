import React from "react";
import { Item } from "./item";
export const ItemList = ({ items, setItems }) => {
  return items.map((item) => (
    <Item key={item.id} item={item} setItems={setItems} />
  ));
};
