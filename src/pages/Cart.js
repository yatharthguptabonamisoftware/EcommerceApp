import React, { useEffect } from 'react'
import './../styles/Cart.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Cartcards from '../components/Cartcards';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Checkout2 from './Checkout2';
export const DiscountContext = React.createContext();

function Cart() {
  const coupuns = ["Newbuy", "Zomato50", "Student"]
  const [discountUp, setdiscountUp] = useState(true);
  const [discount, setDiscount] = useState(0);
  const products = useSelector(state => state.cart);
  const [discountInput, setdiscountInput] = useState('');
  const [correctCoupun, setcorrectCoupun] = useState(false);

  const [amount, setamount] = useState(0);
  const handlediscount = () => {
    setdiscountUp(res => !res);
  }
  useEffect(() => {

    let count = 0;
    products.map((res) => {
      count += res.price;
    })
    setamount(count);
  }, [products])
  const handlediscountinput = (value) => {

    if (coupuns.includes(value)) {
      if (value == "Zomato50") {
        setDiscount(20);
        setamount(amount => 0.8 * amount);
      }
      else if (value == "Student") {
        setDiscount(10);
        setamount(amount => 0.9 * amount);
      }
      else if (value == "Newbuy") {
        setDiscount(50);
        setamount(amount => 0.5 * amount);
      }
      if (!discountUp) {
        setcorrectCoupun(true);
      }
    }
    else {
      setcorrectCoupun(false);
    }
  }
  return (
    <div className='cart'>
      
      <h1 className='heading'>Shopping Cart</h1>
      <div className="cartsection">
        <div className="cartdetail">
          <div className="cartdetail1">
            <h2>Images</h2>
            <h2 className='productname'>ProductName</h2>
            <h2>Qty</h2>
            <h2>Price</h2>

          </div>
          <div className="cartdetail2">
            <hr />
            {products.map((res) => (
              <Cartcards title={res.title} price={res.price} image={res.image} id={res.id} count={res.inputVal}></Cartcards>

            ))}
          </div>

        </div>
        <div className="cartbill">
          <div className="cartbill1">
            <h3>Order Summary</h3>
            <br />
            <h3>Product Price</h3>
            <h3>Subtotal : {amount}$</h3>
            <br />
            <hr />

            <div className="discountsection">
              <h3 onClick={() => handlediscount()} className={discountUp ? 'discountheadingdown' : 'discountheading'}>Discount : {discount}%</h3>
              {!discountUp && <input onChange={(e) => handlediscountinput(e.target.value)} className={correctCoupun ? 'discountinput' : 'discountinputcorrect'} type="text" placeholder='Coupun Code' />}

              {!discountUp ? correctCoupun ? <label className='correctlabel'>Correct Coupum</label> : <label className='incorrectlabel'>Incorrect Coupun</label> : <></>}

              <br />
              <hr />
              <br />
            </div>
            <h3>Total   {amount}$</h3>
          </div>
          <div className="cartbill2">
            <Link to='/checkout2'>   <button type="button" class="text-white bg-black hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Proceed to Checkout</button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart