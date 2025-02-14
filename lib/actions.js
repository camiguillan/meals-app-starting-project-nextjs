'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

//all the functions defined in the ifle will be treated as server actions 


function isInvalid(text){
  return !text && text.trim() === ''
}

export async function shareMeal(prevState, formData){
    console.log(formData)


    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image' ),
      creator: formData.get('name'),
      creator_email: formData.get('email')
    }

    if(isInvalid(meal.title) || isInvalid(meal.summary)  || isInvalid(meal.instructions)
        || isInvalid(meal.creator) || isInvalid(meal.creator_email) || !meal.creator_email.includes('@')
      || !meal.image || meal.image.size === 0 
    ){
       return {
        message: 'Invalid Input', 
       }
    }

    console.log(meal)
     await saveMeal(meal); 
     redirect('/meals')
  }