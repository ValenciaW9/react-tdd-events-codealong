import { useState } from "react";

function App() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  return (
    <div>
      <h1>Select Pizza Toppings</h1>
      <input
        type="checkbox"
        id="pepperoni"
        checked={checkboxChecked}
        aria-checked={checkboxChecked}
        onChange={() => setCheckboxChecked(!checkboxChecked)}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>

      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {checkboxChecked && <li>Pepperoni</li>}
      </ul>
    </div>
  );
}

export default App;