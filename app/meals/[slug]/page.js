import { notFound } from "next/navigation"
import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"
import { getMeal } from "@/lib/meals.js"
export default async function MealPage({params}) {
  const pageParams = await params
  const meal = getMeal(pageParams.slug)
  if (!meal || meal == undefined) {
    notFound()
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />")
  return <>
    <header className={styles.header}>
      <div className={styles.image}>
        <Image fill src={meal.image} alt="Meal image" />
      </div>
      <div className={styles.headerText}>
        <h1>{meal.title}</h1>
        <p className={styles.creator}>
          by <Link href={`mailto:${meal.creator_email}`}>{meal.creator}</Link>
        </p>
        <p className={styles.summary}>
          {meal.summary}
        </p>
      </div>
    </header>
    <main>
      <p className={styles.instructions} dangerouslySetInnerHTML={{__html: meal.instructions}}></p>
    </main>
  </>
}