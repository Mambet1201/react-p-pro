import styles from "./Sorted.module.scss";
import { changeCategory } from "./sortedSlice";
import { useAppDispath, useAppSelector } from "../Items/itemsSlice";

const listOfTypes: string[] = [
  "Все",
  "Мясные",
  "Веганские",
  "Острые",
  "Сырные",
  "Гриль",
];

const TypesPizza = () => {
  const dispath = useAppDispath();
  const category = useAppSelector((state) => state.sorted.categoryId);
  return (
    <ul className={styles.ul}>
      {listOfTypes.map((el, idx) => (
        <li key={el}>
          <button
            className={category === idx ? styles.activ : ""}
            onClick={() => dispath(changeCategory(idx))}
          >
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TypesPizza;
