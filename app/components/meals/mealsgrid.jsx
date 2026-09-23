import MealItem from "./mealitem.jsx"
import styles from "./mealsgrid.module.css"
export default function MealsGrid({meals}) {
  return <ul className={styles.meals}>
    {meals.map(meal => <li key={meal.id}><MealItem {...meal} /></li>)}
  </ul>
}