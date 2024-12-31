import { notFound } from 'next/navigation'
import { getBlogPost } from '../../lib/api.js'

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <div className="prose dark:prose-invert max-w-none">
        {post.content}
      </div>
    </article>
  )
}


