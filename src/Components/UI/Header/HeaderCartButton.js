import cart from '../../../images/cart.svg';
import './headerCartButton.component.css'
import { useContext } from 'react';
import { CartContext } from '../../../Store/cart-context';

export default function HeaderCartButton(props){

  const cartContext = useContext(CartContext);

  const cartItems = cartContext.items.reduce( (currentNumber, item) => {
    return currentNumber + item.amount
  }, 0);

  return(
    <button className='headerCartButton' onClick={props.onClick}>
      <span><img src={cart} className='icon' alt="Shopping Cart" /></span>
      <span className='text'>Your Items</span>
      <span className='basketAmount'>{cartItems}</span>
    </button>
  );
}