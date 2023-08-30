import './styles.css';
import { Fragment } from 'react';
import Header from './Components/UI/Header/Header';
import Meals from './Components/UI/Meals/Meals';
import Cart from './Components/UI/Cart';

export default function App() {
  return(
    <Fragment>
      <Cart />

      <Header />
      <Meals></Meals>
    </Fragment>
  );
}