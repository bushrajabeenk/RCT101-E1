import React from "react"
import CartButton from './CartButton';
import './GroceryItem.css';



// reusable card component

const GroceryItem = ({ id, discount, imgURL, title, sellingPrice, mrp }) => {
    return (
      <>
        <div className="item" key={id} >
          <div className="disimg" >
            <div>
                {discount}
            </div>
            <div>
                <img src={imgURL} alt="" />
            </div>
          </div>
          <div className="heading" >
              {title}
          </div>
          <div className="sellmrp" >
            <div>
                {sellingPrice}
            </div>
            <div>
                {mrp}
            </div>
          </div>
          <div>
              <CartButton/>
          </div>
        </div>
      </>
    );
  };
  export default GroceryItem;
