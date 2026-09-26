'use client'

export const metadata = {
  title: "Error | NextLevel Food",
  description: "Browse Meals"
}

export default function Error({error}) {
  return <main className="error">
    <h1>An error occurred</h1>
    <p>
      Failed to create meal. 
    </p>
  </main>
}