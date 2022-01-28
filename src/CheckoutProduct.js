import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './Stateprovider';

function CheckoutProduct({id,image,title,price,rating}) {
    //pull or change information from dispatch
    const [{basket},dispatch]=useStateValue()

    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutproduct'>
            <img className='checkoutproduct__image' src={image}/>
            
            <div className='checkoutproduct__info'>
                <p className='checkoutproduct__title'>{title}</p>

                <p className='checkoutproduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='checkoutproduct__rating'>
                    {Array(rating)
                        .fill()
                        .map((_,i) => (
                        <p>🌟</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>       
        </div>
    )
}

export default CheckoutProduct


//   {Array.rating // creates the array of rating size
//.fill() //fills the array with empty values i.e null
//.map(()=>( //maps through all the values in the array and puts the star there
//     <p>🌟</p>
// ))}