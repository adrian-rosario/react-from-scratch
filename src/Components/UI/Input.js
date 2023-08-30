
export default function Input(props){

  return(
    <div>
      <label htmlFor={props.input.id}>
        {props.label}
      </label>
      <input {...props.input} />

      <button>
        + Add
      </button>
    </div>
  )
}