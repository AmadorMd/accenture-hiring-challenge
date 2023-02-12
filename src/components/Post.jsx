export const Post = ({ title, body, imageUrl }) => {
  return (
    <div className='bg-lime-200 h-36 w-full md:w-1/2 pt-3 px-5'>
      <img src={imageUrl} alt='Random image extracted from Unisplash' />
      <h3 className='font-bold text-lg text-gray-900'>{title}</h3>
      <p className='text-sm text-gray-700 font-light'>{body}</p>
    </div>
  )
}
