import { useContext } from "react";
import Modal from "../Modal/Modal";
import { CartContext } from "../../../Store/cart-context";
import CartItem from "./CartItem";

export default function Cart(props){

  const cartContext = useContext(CartContext);
  console.log('cartContext: ', cartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

  const hasItems = cartContext.items.length > 0;

  const cartItemRemove = (id) => {
    cartContext.removeItem(id);
  }

  const cartItemAdd = (item) => {
    cartContext.addItem({...item, amount: 1})
  }

  const cartItems = (
    <ul>
      {cartContext.items.map((item) => {

        console.log('Cart item:\n', item.name);
        return(
          <CartItem
          key={item.key}
          name={item.name}
          amount={item.amount}
          price={item.price}
          code={item.code}
          onAdd={cartItemAdd.bind(null, item)}
          onRemove={cartItemRemove.bind(null, item.id)}
          />
        )
       })}
    </ul>
  );

  return(
    <Modal onClose={props.onClose}>

      <div>
      Cart:
      {cartItems}
      </div>

      <div>
        <span>Total amount: </span>
        <span>{totalAmount}</span>
      </div>

      <div>
        <button onClick={props.onClose}>Close</button>
        {hasItems && <button>Order</button>}        
        <button>Empty Cart</button>
      </div>
    </Modal>
  )
}