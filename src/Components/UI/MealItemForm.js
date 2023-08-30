import Input from "./Input"

export default function MealItemForm(props){

  return(
    <div>
      <form>
        <Input 
          label='Amount'
          input={
            {
              id: 'amount_' + props.id,
              type: 'number',
              min: '1',
              max: '5',
              step: '1',
              defaultValue: '1'
            }
          }
        />
      </form>
    </div>
  )
}