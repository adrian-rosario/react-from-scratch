import { Fragment } from 'react'
import cart from '../../images/cart.svg';
import './headerCartButton.component.css'

export default function HeaderCartButton(){
  return(
    <button className='headerCartButton'>
      <span><img src={cart} className='icon' alt="Shopping Cart" /></span>
      <span className='text'>Your Items</span>
      <span className='basketAmount'>44</span>
    </button>
  );
}