import styles from "./CartItem.module.scss";

import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
  useAppDispath,
} from "../Items/itemsSlice";
import { RiDeleteBinLine } from "react-icons/ri";
interface Item {
  el: any;
  id: string;
  title: string;
  size: number;
  dough: string;
  img: string;
  quantity: number;
  price: number;
}

const CartItem: React.FC<Item> = ({
  size,
  quantity,
  price,
  title,
  img,
  id,
  dough,
}) => {
  const itemPrice: number = price * quantity;

  const dispath = useAppDispath();
  return (
    <div className={styles.cont}>
      <div className={styles.titleBlock}>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>
          {dough} тесто, {size}см{" "}
        </p>
      </div>
      <div className={styles.buttons}>
        <button
          disabled={quantity === 1}
          onClick={() => {
            dispath(decreaseQuantity(id));
          }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => {
            dispath(increaseQuantity(id));
          }}
        >
          +
        </button>
      </div>
      <span>{itemPrice}₽</span>
      <button
        className={styles.button}
        onClick={() => {
          dispath(deleteItem(id));
        }}
      >
        <RiDeleteBinLine />
      </button>
    </div>
  );
};

export default CartItem;
