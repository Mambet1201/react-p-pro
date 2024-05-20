import styles from "./Item.module.scss";

const diametetList = [32, 40, 48];

type DiameterProps = {
  size: number;
  setSize: any;
};

const Diameter: React.FC<DiameterProps> = ({ size, setSize }) => {
  return (
    <div className={styles.diameter}>
      {diametetList.map((el) => (
        <button
          key={el}
          className={size === el ? styles.activ : ""}
          onClick={() => setSize(el)}
        >
          {el} см
        </button>
      ))}
    </div>
  );
};

export default Diameter;
