import styles from './card.module.css'

export default function Card(props){
  return(
    <div className={styles.badge}>
      {props.children}      
    </div>
  )
}