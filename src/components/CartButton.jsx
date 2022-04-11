import { useState } from "react";
import './CartButton.css';


// keep the add to cart component here
const CartButton = () => {

    //manage state of the count 
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);

  const handleInc = () => {
    setCount(count + 1);
  }

  const handleDec = () => {
    if(count > 0){
      setCount(count - 1);
      setStatus(true);
    }
    setStatus(false);
    return;
  }

  const handleChange = () => {
    setStatus(true);
  }

  

  


  if(!status)
  {
    return <button onClick={handleChange} >Add to Cart</button>
  } 
  
  return (
    <>
      {/* count with - and  + button */}
      <div className="pmbtn" >
          <button onClick={handleDec} >-</button>
          <div className="count-item">{count}</div>
          <button onClick={handleInc} >+</button>
      </div>
    </>
  );
};
export default CartButton;
