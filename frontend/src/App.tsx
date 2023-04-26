import {Topping} from "./RateToppingCard/RateToppingCard";
import RateToppingCard from "./RateToppingCard/RateToppingCard";


function App() {
  const VegTopping: Topping = {
      _id: "1",
      name: 'Aubergine',
      category: 'Veg',
      img: 'images/aubergine.jpg' 
  }

  return (
   <>
    <RateToppingCard cardTopping={VegTopping} get2randomToppings={()=>{}} rateToppings={()=>{}}/>  
  </>
  );
}

export default App;
