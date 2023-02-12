import './App.css'
import { useEffect, useState } from 'react'
import { Post } from './components/Post'
const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'
const RANDOM_IMAGE_URL = 'https://source.unsplash.com/random'

function App () {
  const [posts, setPosts] = useState([])
  const [images, setImages] = useState({})

  useEffect(() => {
    async function fetchPosts () {
      try {
        const res = await fetch(POSTS_ENDPOINT)
        const data = await res.json()
        setPosts(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPosts()
  }, [])

  useEffect(() => {
    async function fetchImage (id) {
      try {
        const res = await fetch(RANDOM_IMAGE_URL)
        const url = await res.url
        setImages(prevState => ({ ...prevState, [id]: url }))
      } catch (error) {
        console.error(error)
      }
    }
    posts.forEach(post => {
      fetchImage(post.id)
    })
  }, [posts])

  return (
    <main className='container max-w-screen-md mx-auto'>
      <header className='w-full h-44 md:h-64 relative mb-5'>
        <img className='w-full h-full object-cover object-center' />
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-gradient-to-t from-black text-center pb-5 pt-16'>
          <h1 className='text-white text-2xl md:text-3xl font.bold'>Images around the world</h1>
        </div>
      </header>
      <section className='flex flex-row justify-between items-center flex-wrap'>
        {
          posts.map(post => (
            <Post key={post.id} title={post.title} body={post.body} imageUrl={images[post.id] && images[post.id]} />
          ))
        }
      </section>
    </main>
  )
}

export default App
