import styles from "./Item.module.scss";
const doughList = ["Тонкое", "Традиционное"];

type DoughProps = {
  dough: string;
  setDough: any;
};

const Dough: React.FC<DoughProps> = ({ dough, setDough }) => {
  return (
    <div className={styles.dough}>
      {doughList.map((el) => (
        <button
          key={el}
          className={dough === el ? styles.activ : ""}
          onClick={() => setDough(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default Dough;
