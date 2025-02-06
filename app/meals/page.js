import Link from 'next/link'
import css from './page.module.css'
import MealsGrid from '../../components/meals-grid'
import { getMeals } from '../../lib/meals'

export default async function MealsPage(){

    const meals = await getMeals(); 

    console.log(meals)

    return <>
        <header className={css.header} >  
              <h1> Delicious meals, created </h1>   
              <p> Choose your favourite recipe and cook it yourself. It is easy and fun!  </p>
              <p  className={css.cta} >
                <Link  href='/meals/share' > Share your favourite recipe  </Link>
                </p>
        </header>
        <main  className={css.main} >  
            <MealsGrid  meals={meals}  />
             </main>
    </>
}