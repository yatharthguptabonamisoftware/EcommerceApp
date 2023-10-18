import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import Adress from '../components/Adress';
import './../styles/Checkout2.css'
import { useSelector } from 'react-redux';
import CheckoutBill from '../components/CheckoutBill';
import { DiscountContext } from './Cart';
function Checkout2() {
    const discount = useContext(DiscountContext);
    const products = useSelector((state) => state.cart);
    const [value, setValue] = useState("");
    const [amount, setamount] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null);
    const isDateValid = (date) => {
        const currentDate = new Date();
        return date >= currentDate;
    };
    useEffect(() => {
        let count = 0;
        products.map((res) => {
          count += res.price;
        });
        setamount(count);
      }, [products]);

 


    return (
        <div className='checkout2'>
            <div className='checkout2part1'>
                <div className='payment'>
                    <div className="checkoutbill">
                        <h1 className="paymentheading">Payment</h1>
                        <hr/>
                        <div className="checkoutbill  1">
                            <CheckoutBill></CheckoutBill>
                        </div>
                           
                        <div className="checkoutbill2"></div>
                    </div>
                </div>

                <div className='adress'>
                    
                    <Adress></Adress>
                </div>
            </div>
            <div className='checkout2part2'>

                <div className="cartbill">
                    <div className="cartbill1">
                        <h3 className='summaryheading'>Order Summary</h3>
                        <br />
                        <h3>Product Price</h3>
                        
                        <h3>Subtotal : { amount}$</h3>
                        <br />
                        <hr />
                        <div className="discountsection">
                        <br />
              <h3 >Discount :  10% </h3>
              <br />
            </div>
                        <hr />

                        <br />
                        <h3 className='summaryheading'>Total   {amount*0.9 }$</h3>
                    </div>
                    <div className="cartbill2">
                        <Link to='/checkout2'>   <button type="button" class="text-white bg-black hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Make Payment</button>
                        </Link>
                        
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Checkout2