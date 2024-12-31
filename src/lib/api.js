const blogPosts = [
  {
    slug: 'future-of-web-development',
    title: 'The Future of Web Development: Trends to Watch in 2023',
    date: 'June 15, 2023',
    readTime: '5 min read',
    image: '/placeholder.svg?height=400&width=600',
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><h2>Key Trends</h2><ul><li>Progressive Web Apps</li><li>JAMstack Architecture</li><li>AI-powered Development Tools</li></ul>',
  },
  // Add more blog posts here
]

export async function getBlogPost(slug) {
  // In a real application, this would fetch data from a database or API
  return blogPosts.find(post => post.slug === slug)
}

export async function getAllBlogPosts() {
  // In a real application, this would fetch data from a database or API
  return blogPosts
}

