import { useState } from "react";

function App() {
const [pepperoniIsChecked, setPepperonisChecked] = useState(false);


function togglePeperoni(e) {
  setPepperonisChecked(e.target.checked);
}

  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      <input
        type="checkbox"
        id="pepperoni"
        checked={false}
        aria-checked={false}
        onChange={togglePeperoni}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>


      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepperoniIsChecked ? <li>pepperoni</li> : null}
    </ul>
  </div>
  );
}

export default App;