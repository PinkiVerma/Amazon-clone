import React from 'react';
import { useStateValue } from './Stateprovider';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { Link } from 'react-router-dom';

function Payment() {
  const [{basket,user},dispatch] = useStateValue();
  return(
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (<Link to="/checkout">{basket?.length} items</Link>)
            </h1>
            {/* delivery address */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>

                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123,React Lane</p>
                    <p>Delhi, India</p>
                </div>
            </div>

            {/* review items */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items & delivery</h3>
                </div>

                <div className='payment__items'>
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                        />
                    ))}
                </div>
            </div>

            {/* payment method */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>

                <div className='Payment__details'>
                    {/* Stripe magic will go */}
                </div>
            </div>
        </div>
    </div>
  ) 
}

export default Payment;
