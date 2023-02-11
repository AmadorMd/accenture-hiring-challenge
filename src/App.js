import './App.css'
import { useEffect, useState } from 'react'
const ALL_POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'
function App () {
  const [posts, setPosts] = useState([])
  // get all the post to display in site
  useEffect(() => {
    fetch(ALL_POST_ENDPOINT)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <main>
      <div className='container max-w-screen-md mx-auto'>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default App
