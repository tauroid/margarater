import { Topping } from "./RateToppingCard/RateToppingCard";
import RateToppingCard from "./RateToppingCard/RateToppingCard";

function App() {
  const VegTopping: Topping = {
    _id: "1",
    name: 'Aubergine',
    category: 'Veg',
    img: 'images/aubergine.jpg'
  }

  const MeatTopping: Topping = {
    _id: "2",
    name: 'Tandoori Chicken',
    category: 'Meat',
    img: 'images/tandoori-chicken.jpg'
  }

  const CheeseTopping: Topping = {
    _id: "2",
    name: 'Mozzarella',
    category: 'Cheese',
    img: 'images/mozeralla.jpg'
  }

  return (
    <>
      <RateToppingCard cardTopping={VegTopping} get2randomToppings={() => { }} rateToppings={() => { }} />
      <RateToppingCard cardTopping={MeatTopping} get2randomToppings={() => { }} rateToppings={() => { }} />
      <RateToppingCard cardTopping={CheeseTopping} get2randomToppings={() => { }} rateToppings={() => { }} />
    
    </>
  );
}

export default App;
