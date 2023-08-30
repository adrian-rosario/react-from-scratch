import './styles.css';
import { Fragment, useState } from 'react';
import Header from './Components/UI/Header/Header';
import Meals from './Components/UI/Meals/Meals';
import Cart from './Components/UI/Cart';

export default function App() {

  const [cardIsShown, setCardIsShown] = useState(false);

  function showCartHandler(){
    return setCardIsShown(true);
  }

  function hideCartHandler(){
    return setCardIsShown(false);    
  }

  return(
    <Fragment>
      {cardIsShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
      <Meals></Meals>
    </Fragment>
  );
}