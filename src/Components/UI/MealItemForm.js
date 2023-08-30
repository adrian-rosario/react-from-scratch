import { useRef, useState } from "react";
import Input from "./Input"

export default function MealItemForm(props){

  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputReference = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const enteredAmount = amountInputReference.current.value;
    const enteredAmountAsNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || 
      enteredAmountAsNumber < 1 || 
      enteredAmountAsNumber > 5){
        setAmountIsValid(false);
        return;
    }

    props.onAddToCart(enteredAmountAsNumber);
  }
  
  return(
    <div>
      <form onSubmit={submitHandler}>
        <Input 
          label='Amount'
          input={
            {
              id: 'amount_' + props.id,
              type: 'number',
              min: '1',
              max: '5',
              step: '1',
              defaultValue: '1'
            }
          }
          ref={amountInputReference}
        />
        <button>add ++</button>
        {!amountIsValid && <p>please pick a valid amount</p>}
      </form>
    </div>
  )
}