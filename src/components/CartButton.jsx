import { useState } from "react";
import "./CartButton.css";

// keep the add to cart component here
const CartButton = () => {
  //manage state of the count
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);

  const handleInc = () => {
    setCount(count + 1);
  };

  const handleDec = () => {
    if (count > 0) {
      setCount(count - 1);
      setStatus(true);
    }
    // render component 1
    setStatus(false);
    return;
  };

  const handleChange = () => {
    setStatus(true);
  };

  // status is false, render this component - 1
  if (!status) {
    return <button onClick={handleChange}>Add to Cart</button>;
  }

  // status is true then render this component - 2
  return (
    <>
      {/* count with - and  + button */}
      <div className="pmbtn">
        <button onClick={handleDec}>-</button>
        <div className="count-item">{count}</div>
        <button onClick={handleInc}>+</button>
      </div>
    </>
  );
};
export default CartButton;
