import Link from "next/link"
import styles from "./page.module.css"
import MealsGrid from "../components/meals/mealsgrid"
export default function MealsPage() {
  return <>
    <header className={styles.header}>
      <h1>Delicious Meals Created <span className={styles.highlight}>By You!</span></h1>
      <p>
        Choose your favorite recipe and cook it yourself. It is easy and fun.
      </p>
      <p className={styles.cta}>
        <Link href="/meals/share">Add Your Own Recipe</Link>
      </p>
    </header>
    <main className={styles.main}>
      <MealsGrid meals={[]} />
    </main>
  </>
}