import Link from 'next/link'
import css from './page.module.css'
import MealsGrid from '../../components/meals-grid'

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
            <MealsGrid  meals={[]}  />
             </main>
    </>
}