import React from 'react'
import './../styles/Adress.css'
import Yearcomponent from './Yearcomponent'
import { FriendList } from './FriendList'
import AddressForm from './AdressForm'
function Adress() {
  return (
    <div className='adressc'>
      <h1 className='adressheading'>Billing Adress</h1>
      <hr/>
      <div className='checkboxadress'>
        <input className='adresscheckbox' type='checkbox' />
       
        <h1>Use Shipping Adress</h1>
        </div>
        <input color='#192655' className='adressinput' placeholder='FirstName*'/>
        <input className='adressinput' placeholder='Last Name*'/>
        {/* <input className='adressinput' placeholder='Steet Adress'/>
        <input className='adressinput' placeholder='Adress 2'/> */}
       <AddressForm></AddressForm>
    </div>
  )
}

export default Adress