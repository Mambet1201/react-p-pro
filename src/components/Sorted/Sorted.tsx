import styles from "./Sorted.module.scss";
import TypesPizza from "./TypesPizza";
import SelectPizza from "./SelectPizza";

const Sorted = () => {
  return (
    <div className={styles.container}>
      <TypesPizza />
      <SelectPizza />
    </div>
  );
};

export default Sorted;
