import { Link } from "react-router-dom";
import img from "../../../images/vector (1).png";
import styles from "./Cart.module.scss";
const ClearCart = () => {
  return (
    <div className={styles.clearCart}>
      <h1>Корзина пуста</h1>
      <p>
        Вероятно вы еще не выбрали ни одну пиццу. <br />
        Для того,что бы сделать выбор вернитесь на главную страницу.
      </p>
      <img src={img} alt="" />
      <Link to={"/"}>
        <button>Вернуться в меню</button>
      </Link>
    </div>
  );
};

export default ClearCart;
