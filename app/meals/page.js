import Link from 'next/link'
import css from './page.module.css'
import MealsGrid from '../../components/meals-grid'
import { getMeals } from '../../lib/meals'
import { Suspense } from 'react';
import '../globals.css'


async function Meals(){
    const meals =await getMeals(); 

    return <MealsGrid  meals={meals}  />
}


export default function MealsPage(){

    return <>
        <header className={css.header} >  
              <h1> Delicious meals, created </h1>   
              <p> Choose your favourite recipe and cook it yourself. It is easy and fun!  </p>
              <p  className={css.cta} >
                <Link  href='/meals/share' > Share your favourite recipe  </Link>
                </p>
        </header>
        <main  className={css.main} >  
            <Suspense  fallback={<p   className={css.loading}>  Fetching meals </p>} >
            <Meals />
            </Suspense>
             </main>
    </>
}