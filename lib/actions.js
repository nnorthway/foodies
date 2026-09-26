'use server'
import { redirect } from "next/navigation"
import { saveMeal } from "./meals.js"
import { revalidatePath } from "next/cache"

function invalidText(text) {
  return !text || text.trim() === ""
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    image: formData.get('image'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    creator: formData.get('name'),
    creator_email: formData.get('email')
  }

  if (
    invalidText(meal.title) ||
    invalidText(meal.summary) || 
    invalidText(meal.instructions) || 
    invalidText(meal.creator) || 
    invalidText(meal.creator_email) || 
    !meal.creator_email.includes('@') || 
    !meal.image || 
    meal.image.size == 0
  ) {
    return {
      message: "Invalid input"
    }
  }

  await saveMeal(meal)
  revalidatePath("/meals")
  redirect('/meals')
}