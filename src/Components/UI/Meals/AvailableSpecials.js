import { mockData } from "./mock-meals";
import Card from "../Card/Card";
import MealItem from "./MealItem";

export default function AvailableSpecials(){

  const mockMeals = mockData.map(
    meal => 
      <MealItem 
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        code={meal.code}
      />
  )

  return(
    <section>
      <Card>
        <h3>
          This week's Specials:
        </h3>

        <ul>
          {mockMeals}
        </ul>
      </Card>
    </section>
  )
}