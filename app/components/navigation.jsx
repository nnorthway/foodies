import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/meals">Meals</Link>
      <Link href="/meals/share">Share Meal</Link>
      <Link href="/meals/example">Example Meal</Link>
      <Link href="/community">Community</Link>
    </nav>
  )
}