import './mealItem.component.css';
import MealItemForm from '../MealItemForm';
import { useContext } from 'react';
import { CartContext } from '../../../Store/cart-context';

export default function MealItem(props){

  console.log('meal item props: ', props);

  const price = `$${props.price.toFixed(2)}`;

  const cartContext = useContext(CartContext);

  const addToCartHandler = amount => {
    cartContext.addItem(
      {
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
      }
    );
  };

  return(
    <li>
      <div>{props.name}</div>
      <div>{props.description}</div>
      <div>{price}</div>

      {
        <MealItemForm onAddToCart={addToCartHandler} />
      /* <MealItemForm price={props.price} code={props.code} id={props.id} key={props.id} name={props.name} /> */
      }
    </li>
  )
}