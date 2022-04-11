import React from "react"
import data from '../data.json'
import GroceryItem from './GroceryItem';
import { v4 as uuid } from "uuid";
import './Grocerydetails.css';


const Grocerydetails = ()=>{
console.log(data)

    return(
        <>
            <h1>Groceries</h1>
            <div className="container">
                {/* map through the data and display the cards */}
                {data.map((el) => {
                    return (
                        <>
                            <GroceryItem key={el.id} {...el} />
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default Grocerydetails;