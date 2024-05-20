import styles from "./Header.module.scss";
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../Items/itemsSlice";

const Header = () => {
  const navigate = useNavigate();
  const list = useAppSelector((state) => state.items.todos);
  const totalPrice = useAppSelector((state) => state.items.totalPrice);

  return (
    <header>
      <div className={styles.header_logo}>
        <img src="" alt="" />
        <div className="">
          <h3>REACT PIZZA</h3>
          <p>Самая вкусная пицца</p>
        </div>
      </div>
      <div
        className={styles.header_card}
        onClick={() => {
          navigate("/:id");
        }}
      >
        <span>{totalPrice}Р | </span>
        <TiShoppingCart className={styles.icon} /> <span>{list.length}</span>
      </div>
    </header>
  );
};

export default Header;
