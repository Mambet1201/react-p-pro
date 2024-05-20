import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

interface CartItem {
  id: string;
  title: string;
  size: number;
  dough: string;
  img: string;
  quantity: number;
  price: number;
}

interface SliceState {
  todos: CartItem[];
  totalPrice: number;
  cartItemPrice: number;
}

const data: any = localStorage.getItem("list");

const initialState: SliceState = {
  todos: data.trim() ? JSON.parse(data) : [],
  totalPrice: 0,
  cartItemPrice: 0,
};

export const ItemsSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.todos.push(action.payload);
      localStorage.setItem("list", JSON.stringify(state.todos));
    },
    changeTotalPrice: (state) => {
      state.totalPrice = state.todos.reduce(
        (acc: number, curr: { price: number; quantity: number }) =>
          acc + curr.price * curr.quantity,
        0
      );
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((el) =>
        el.id === action.payload ? { ...el, quantity: el.quantity + 1 } : el
      );
      localStorage.setItem("list", JSON.stringify(state.todos));
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((el) =>
        el.id === action.payload ? { ...el, quantity: el.quantity - 1 } : el
      );
      localStorage.setItem("list", JSON.stringify(state.todos));
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
    },
    clearTodos: (state) => {
      state.todos = [];
    },
  },
});
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispath = useDispatch<AppDispatch>;

export const {
  addItem,
  changeTotalPrice,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  clearTodos,
} = ItemsSlice.actions;
export default ItemsSlice.reducer;
