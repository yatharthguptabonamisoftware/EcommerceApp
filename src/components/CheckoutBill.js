import React from 'react'
import './../styles/CheckoutBill.css'
import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CheckoutBill() {
    const [cardNumberSectionInput, setcardNumberSectionInput] = useState('');
    const [cardNumberSectionImages1, setcardNumberSectionImages1] = useState(false);
    const [cardNumberSectionImages2, setcardNumberSectionImages2] = useState(false);
    const [cardNumberSectionImages3, setcardNumberSectionImages3] = useState(false);
    const [amount, setamount] = useState(0);
    const [cvvValue, setcvvValue] = useState('');
    const [value, setValue] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);

    const isDateValid = (date) => {
        const currentDate = new Date();
        return date >= currentDate;
    };
    useEffect(() => {

        if (cardNumberSectionInput) {
            if (cardNumberSectionInput.substring(0, 1) == '3') {
                setcardNumberSectionImages1(true);
                setcardNumberSectionImages2(false);
                setcardNumberSectionImages3(false);
            }
            else if (cardNumberSectionInput.substring(0, 1) == '1') {
                setcardNumberSectionImages2(true);
                setcardNumberSectionImages3(false);
                setcardNumberSectionImages1(false);
            }
            else if (cardNumberSectionInput.substring(0, 1) == '2') {
                setcardNumberSectionImages3(true);
                setcardNumberSectionImages1(false);
                setcardNumberSectionImages2(false);
            }
            else {
                setcardNumberSectionImages1(false);
                setcardNumberSectionImages1(false);
                setcardNumberSectionImages2(false);
            }
        }
        else {
            setcardNumberSectionImages1(false);
            setcardNumberSectionImages3(false);
            setcardNumberSectionImages2(false);
        }
    }, [cardNumberSectionInput, cvvValue])
    const onChange = (e) => {
        setcardNumberSectionInput(e.target.value)
        const targetValue = phoneNumberAutoFormat(e.target.value);
        setValue(targetValue);
    };

    const phoneNumberAutoFormat = (phoneNumber) => {
        const number = phoneNumber.trim().replace(/[^0-9]/g, "");

        if (number.length < 5) return number;
        if (number.length < 9) return number.replace(/(\d{4})(\d{1})/, "$1-$2");
        if (number.length < 14) return number.replace(/(\d{4})(\d{4})(\d{1})/, "$1-$2-$3");
        if (number.length < 19) return number.replace(/(\d{4})(\d{4})(\d{4})(\d{1})/, "$1-$2-$3-$4");
        return number.replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3");
    };

    return (
        <div className='checkoutbill'>

            <div className="carnumbersection">
                <input type="tel" value={value} onChange={onChange} maxLength={19} className="cardnumbersectioninput" placeholder="Card Number*" />
                <div className="cardnumbersectionimages">
                    <img className={cardNumberSectionImages1 ? "cardnumbersectionimagesactive" : "cardnumbersectionimages1"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSULY-BOw5PtnxvlMQstv1FBLx09SvRcWJhqA&usqp=CAU" alt="" />
                    <img className={cardNumberSectionImages2 ? "cardnumbersectionimagesactive" : "cardnumbersectionimages2"} src="data:image/png;base64,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" alt="" />
                    <img className={cardNumberSectionImages3 ? "cardnumbersectionimagesactive" : "cardnumbersectionimages3"} src="data:image/png;base64,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" alt="" />
                </div>
            </div>
            <div className="cvv">
                <div className="expirysection">
                    <DatePicker
                        className='datepicker'
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        isClearable
                        filterDate={isDateValid}
                        placeholderText='MM/YYYY*'
                    />
                    <br />
                    <label className="labelexpiry">Expiry Date</label>
                </div>
                <input className="billinput" placeholder="CVC*" maxLength='3' type="password" /> </div>




        </div>
    )
}

export default CheckoutBill