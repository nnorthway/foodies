export default async function MealPage({params}) {
  const pageParams = await params 
  return <h1 style={{ color: 'white', textAlign: 'center' }}>Meal Slug: {params.slug}</h1>
}