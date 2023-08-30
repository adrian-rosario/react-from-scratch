import Modal from "./Modal";

export default function Cart(){

  const cartItem = <ul>
    {[
    {    
      id: 'm3',
      name: 'Awesome platter, No.3', 
      amount: 2,
      price: 24.5,
      code: '789ghi'
    },
    ].map((item) => 
    <li>{item.name} <br /> Amount: {item.amount}, Price: {item.price}, total: ${item.price * item.amount}</li>
    )}
  </ul>

  return(
    <Modal>
      {cartItem}
      <br/>
        actions, close/order
      <div>
        <button>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  )
}