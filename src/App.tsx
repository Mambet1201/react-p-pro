import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Cart from "./components/Cart/Cart";
import HomePage from "./components/HomePage";
const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
