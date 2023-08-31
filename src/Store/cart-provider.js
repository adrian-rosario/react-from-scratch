import { CartContext } from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0
};

function cartReducer(state, action){

  let updatedItems;
  
  if(action.type === 'ADD'){
    updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = 
      state.totalAmount + action.item.price *
      action.item.amount;
    
    // is item part of the cart already
    const existingItemIndex = state.items.findIndex(
      item => {
        return item.id === action.item.id;
      }
    );
    // if it exists, we want that index
    const existingCartItem = state.items[existingItemIndex];
    // only update the amount for exists/duplicate entry
    if (existingCartItem){
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      // first time added to array 
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if (action.type === 'REMOVE'){
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = {...existingItem, amount: existingItem.amount - 1};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  if (action.type === 'DELETE'){
    return defaultCartState;
  }

  return defaultCartState;
}

export default function CartProvider(props){

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  function addItemToCartHandler(item){
    dispatchCartAction({type: 'ADD', item: item})
  }

  function removeItemFromCartHandler(id){
    dispatchCartAction({type: 'REMOVE', id: id})    
  }

  function clearItemsFromCartHandler(){
    dispatchCartAction({type: 'DELETE'})
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearItems: clearItemsFromCartHandler
  }

  return(
    <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  )
}