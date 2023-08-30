import { Fragment } from "react";
import './header.component.css';
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props){
  return(
    <Fragment>
      <header>
        <h1>
          Shopping Cart Exercise
        </h1>

        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  )
}