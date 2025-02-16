import Image from 'next/image'
import classes from './page.module.css'
import '../../globals.css'
import { getMeal } from '../../../lib/meals'
import { notFound } from 'next/navigation';

export async function generateMetaData({params}){ //FOR STATIC METADATA
    const meal = getMeal(params.mealSlug)

    if(!meal){
        notFound();
    }

    return {
        title: meal.title,
        description: meal.summary
    }
}

export default function MealDetails({params}){
    const meal = getMeal(params.mealSlug);
    // console.log(meal)

    if(!meal){
        notFound();
    }
    meal.instructions = meal.instructions.replace(/\n/g, '<br />')

    return <>
    <header className={classes.header} > 
    <div className={classes.image} >
        <Image src={meal.image} alt={meal.title}  fill  />
    </div>
    <div className={classes.headerText} >
        <h1 > {meal.title} </h1>
        <p className={classes.creator} >  By <a href={`mailto:${meal.creator_email}`}  >Name  </a> </p>
        <p  className={classes.summary} > {meal.summary}   </p>
    </div>
    
    </header>
    <main  className={classes.main}>

        <p  className={classes.instructions}  dangerouslySetInnerHTML={{
            __html: meal.instructions,
        }}  >
        </p>
    </main>
    </>
}