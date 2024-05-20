import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  changeTotalPrice,
  clearTodos,
  useAppDispath,
  useAppSelector,
} from "../Items/itemsSlice";

import { BsCart4 } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";

import CartItem from "./CartItem";
import ClearCart from "./ClearCart";

import styles from "./Cart.module.scss";

interface T {
  id: string;
  title: string;
  size: number;
  dough: string;
  img: string;
  quantity: number;
  price: number;
}

const Cart: React.FC = () => {
  const totalPrice = useAppSelector((state) => state.items.totalPrice);
  const list = useAppSelector((state) => state.items.todos);
  const navigate = useNavigate();
  const dispath = useAppDispath();

  const quantity: number = list.reduce(
    (acc: number, curr: T) => acc + curr.quantity,
    0
  );

  useEffect(() => {
    dispath(changeTotalPrice());
  }, [list]);

  return (
    <div className={styles.cart}>
      <div className={styles.header_logo} onClick={() => navigate("/")}>
        <img src="" alt="" />
        <div className="">
          <h3>REACT PIZZA</h3>
          <p>Самая вкусная пицца</p>
        </div>
      </div>
      {list.length === 0 ? (
        <ClearCart />
      ) : (
        <div className={styles.infoBlock}>
          <div className={styles.content}>
            <h2>
              <BsCart4 /> КОРЗИНА
            </h2>
            <button
              onClick={() => {
                dispath(clearTodos());
              }}
            >
              <RiDeleteBinLine /> Очистить корзину
            </button>
          </div>
          {list.map((el: T) => (
            <CartItem
              el={el}
              id={el.id}
              title={el.title}
              size={el.size}
              dough={el.dough}
              img={el.img}
              quantity={el.quantity}
              price={el.price}
            />
          ))}

          <div className={styles.price}>
            <span>Bсего Пицц: {quantity}шт</span>
            <span>Суммма заказа: {totalPrice}₽</span>
          </div>
          <div className={styles.floorButtons}>
            <button
              className={styles.back}
              onClick={() => {
                navigate("/");
              }}
            >
              Вернуться назад
            </button>
            <button className={styles.pay}>Оплатить сейчас</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
