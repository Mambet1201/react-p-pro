import Header from "./Header/Header";
import Sorted from "./Sorted/Sorted";
import Items from "./Items/Items";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Sorted />
      <h2>Все пиццы</h2>
      <Items />
    </div>
  );
};

export default HomePage;
