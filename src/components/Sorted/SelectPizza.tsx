import React from "react";
import { changeSort } from "./sortedSlice";

import { useAppDispath } from "../Items/itemsSlice";

interface sortedListEl {
  name: string;
  title: string;
}

const sortedList: sortedListEl[] = [
  {
    name: "rating",
    title: "По рейтингу",
  },
  { name: "price", title: "Цене" },
  { name: "title", title: "Алфавиту" },
];
const SelectPizza = () => {
  const dispath = useAppDispath();

  const fancChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const el = sortedList.find((el) => el.title === e.target.value);
    dispath(changeSort(el));
  };
  return (
    <select onChange={(e) => fancChange(e)}>
      {sortedList.map((el) => (
        <option key={el.name}>{el.title}</option>
      ))}
    </select>
  );
};

export default SelectPizza;
