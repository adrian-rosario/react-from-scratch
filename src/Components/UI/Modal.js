import { Fragment } from "react"
import ReactDOM from 'react-dom'

function Backdrop(props){
  return(
    <div className="modalBackdrop" onClick={props.onClose}></div>
  )
}

function ModalOverlay(props){
  return(
    <div className="modalOverlay">{props.children}</div>
  )
}

const portalElement = document.getElementById('overlays');

export default function Modal(props){

  return(
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}