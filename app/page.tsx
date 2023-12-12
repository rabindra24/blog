import BlogCard from '@/components/BlogCard'

export default async function Home() {
  const Card = await BlogCard()
  return (
    <main>
      {Card}
    </main>
  )
}

export const revalidate = 3;