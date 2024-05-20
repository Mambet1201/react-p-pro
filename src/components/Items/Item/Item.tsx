import { useEffect, useState } from "react";
import styles from "./Item.module.scss";
import {
  addItem,
  changeTotalPrice,
  increaseQuantity,
  useAppDispath,
  useAppSelector,
} from "../itemsSlice";

import Dough from "./Dough";
import Diameter from "./Diameter";

interface ItemT {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
}

interface CartItem {
  id: string;
  title: string;
  size: number;
  dough: string;
  img: string;
  quantity: number;
  price: number;
}

const Item: React.FC<ItemT> = ({ id, title, price, imageUrl }) => {
  const [size, setSize] = useState<number>(32);
  const [dough, setDough] = useState<string>("Тонкое");

  const dispath = useAppDispath();
  const list = useAppSelector((state) => state.items.todos);

  let cartItemPrice = 0;

  if (size === 40) {
    cartItemPrice = Math.round(price * 1.2);
  } else if (size === 48) {
    cartItemPrice = Math.round(price * 1.5);
  } else cartItemPrice = Math.round(price);

  const cartItem: CartItem = {
    id: id + dough + size,
    title: title,
    size,
    dough,
    img: imageUrl,
    quantity: 1,
    price: cartItemPrice,
  };
  const isExist = list.find((el: { id: string }) => el.id === cartItem.id);

  useEffect(() => {
    dispath(changeTotalPrice());
  }, [list]);

  const addItemByList = () => {
    !isExist
      ? dispath(addItem(cartItem))
      : dispath(increaseQuantity(cartItem.id));
  };

  return (
    <div className={styles.item}>
      <img src={imageUrl} alt="пицца" />
      <h3>{title}</h3>
      <div className={styles.size}>
        <Dough dough={dough} setDough={setDough} />
        <Diameter size={size} setSize={setSize} />
      </div>
      <div className={styles.price}>
        <span>от {cartItemPrice} Р</span>
        <button className={styles.addItem} onClick={() => addItemByList()}>
          + Добавить <span>{isExist ? isExist.quantity : <span>🍕</span>}</span>
        </button>
      </div>
    </div>
  );
};

export default Item;
