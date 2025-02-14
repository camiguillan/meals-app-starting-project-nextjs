import css from './meals-grid.module.css'
import MealItem from './meal-item'

export default function MealsGrid({meals}){
    // console.log('meaaals in grid----------------------------------------', meals )
    return <ul className={css.meals}  > 
        {meals.map(meal => {
            return <li key={meal.id}  > <MealItem {...meal} /> </li>
        })}
         </ul>
}