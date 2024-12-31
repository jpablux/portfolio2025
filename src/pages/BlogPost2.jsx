import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BlogPost2() {
  return (
    <article className="max-w-2xl mx-auto py-8">
      <Link to="/blog" className="flex items-center text-primary hover:underline mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </Link>
      <h1 className="text-3xl font-bold mb-4">Mastering React: Advanced Patterns and Best Practices</h1>
      <div className="flex justify-between items-center text-sm text-muted-foreground mb-6">
        <span>July 1, 2023</span>
        <span>8 min read</span>
      </div>
      <img 
        src="/placeholder.svg?height=400&width=800" 
        alt="Mastering React" 
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <div className="prose dark:prose-invert max-w-none">
        <p>React has become one of the most popular libraries for building user interfaces. As developers, it's crucial to not only understand the basics but also to master advanced patterns and best practices. In this post, we'll dive deep into some advanced React concepts that can help you write more efficient and maintainable code.</p>
        
        <h2>1. Custom Hooks</h2>
        <p>Custom hooks are a powerful feature in React that allow you to extract component logic into reusable functions. They help in reducing code duplication and making your components cleaner and more focused.</p>
        <pre><code>{`
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return size;
}
        `}</code></pre>
        
        <h2>2. Render Props</h2>
        <p>The render prop pattern is a technique for sharing code between React components using a prop whose value is a function. This pattern provides a powerful way to make your components more flexible and reusable.</p>
        
        <h2>3. Higher-Order Components (HOCs)</h2>
        <p>Higher-Order Components are functions that take a component and return a new component with some additional functionality. They're a great way to reuse component logic across your application.</p>
        
        <h2>Conclusion</h2>
        <p>Mastering these advanced React patterns and best practices can significantly improve your skills as a React developer. Remember, the key to becoming proficient with these patterns is practice and real-world application. Happy coding!</p>
      </div>
    </article>
  )
}

