import './mealItem.component.css';
import MealItemForm from '../MealItemForm';

export default function MealItem(props){

  console.log('meal item props: ', props);

  const price = `$${props.price.toFixed(2)}`;

  return(
    <li>
      <div>{props.name}</div>
      <div>{props.description}</div>
      <div>{price}</div>

      <MealItemForm price={props.price} code={props.code} id={props.id} key={props.id} name={props.name} />
    </li>
  )
}