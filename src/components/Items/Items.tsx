import { useEffect, useState } from "react";
import { useAppSelector } from "./itemsSlice";
import axios from "axios";

import styles from "./Items.module.scss";

import MyLoader from "../Loader/MyLoader";
import Item from "./Item/Item";

type ItemT = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  category: number;
  rating: number;
};

function Items() {
  const [itemsArr, setItemsArr] = useState<ItemT[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const category = useAppSelector((state) => state.sorted.categoryId);
  const sort = useAppSelector((state) => state.sorted.sort);

  const url = `https://6634c6979bb0df2359a2b1b0.mockapi.io/items?${
    category >= 1 ? `category=${category}` : ""
  }&sortby=${sort.name} `;

  const getItems = async () => {
    setIsLoading(true);
    let res = await axios.get(url);
    setItemsArr(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getItems();
  }, [category, sort]);

  return (
    <div className={styles.cont}>
      {isLoading
        ? [...new Array(6)].map((el) => <MyLoader key={el} />)
        : itemsArr.map((el) => (
            <Item
              key={el.id}
              id={el.id}
              imageUrl={el.imageUrl}
              title={el.title}
              price={el.price}
            />
          ))}
    </div>
  );
}

export default Items;
