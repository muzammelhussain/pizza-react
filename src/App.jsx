// add to the top
import { createRoot } from "react-dom/client";
import Pizza from "./pizza";


const App = () => {
  return (
    <div>
      <h1>Muhin's Pizza – Order Now</h1>
      <Pizza name="Pepperoni" description="Mozzarella Cheese, Pepperoni" />
      <Pizza
        name="The Hawaiian Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
      />
      <Pizza
        name="The Big Meat Pizza"
        description="Bacon, Pepperoni, Italian Sausage, Chorizo Sausage"
      />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
