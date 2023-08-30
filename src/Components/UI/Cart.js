import { useContext } from "react";
import Modal from "./Modal";
import { CartContext } from "../../Store/cart-context";
import CartItem from "./CartItem";

export default function Cart(props){

  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

  const hasItems = cartContext.items.length > 0;

  const cartItemRemove = (id) => {

  }

  const cartItemAdd = (item) => {

  }

  const cartItems = (
    <ul>
      {cartContext.items.map((item) => {
        <CartItem
          key={item.key}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAdd.bind(null, item)}
          onRemove={cartItemRemove.bind(null, item.id)} 
        />
      })}
    </ul>
  );

  return(
    <Modal onClose={props.onClose}>

      {cartItems}

      <div>
        <span>Total amount: </span>
        <span>{totalAmount}</span>
      </div>

      <div>
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
        <button>Empty Cart</button>
      </div>
    </Modal>
  )
}