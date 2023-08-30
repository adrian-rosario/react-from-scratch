import { Fragment } from "react";
import MealSummary from "./MealSummary";
import AvailableSpecials from "./AvailableSpecials";

export default function Meals(){
  return(
    <Fragment>
      <MealSummary></MealSummary>
      <AvailableSpecials></AvailableSpecials>
    </Fragment>
  )
}