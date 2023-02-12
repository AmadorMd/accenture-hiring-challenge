import './App.css'
import { useEffect, useState } from 'react'
const ALL_POST_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'
function App () {
  const [posts, setPosts] = useState([])
  const [urlImage, setUrlImage] = useState()
  // get all the post to display in site
  useEffect(() => {
    fetch(ALL_POST_ENDPOINT)
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  // get a radom Image
  useEffect(() => {
    fetch('https://source.unsplash.com/random?orientation=landscape')
      .then(res => setUrlImage(res.url))
  }, [])
  // post component
  const Post = ({ title, body }) => {
    return (
      <div className='bg-lime-200 h-36 w-full md:w-1/2 pt-3 px-5'>
        <img src='' />
        <h3 className='font-bold text-lg text-gray-900'>{title}</h3>
        <p className='text-sm text-gray-700 font-light'>{body}</p>
      </div>
    )
  }
  return (
    <main className='container max-w-screen-md mx-auto'>
      <header className='w-full h-44 md:h-64 relative mb-5'>
        <img className='w-full h-full object-cover object-center' src={urlImage} />
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-gradient-to-t from-black text-center pb-5 pt-16'>
          <h1 className='text-white text-2xl md:text-3xl font.bold'>Images around the world</h1>
        </div>
      </header>
      <section className='flex flex-row justify-between items-center flex-wrap'>
        {
          posts.map(post => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))
        }
      </section>
    </main>
  )
}

export default App
