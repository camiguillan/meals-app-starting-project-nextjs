'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

//all the functions defined in the ifle will be treated as server actions 

export async function shareMeal(formData){
    console.log(formData)
    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image' ),
      creator: formData.get('name'),
      creator_email: formData.get('email')
    }

    console.log(meal)
    // await saveMeal(meal); 


    // redirect('/meals')
  }