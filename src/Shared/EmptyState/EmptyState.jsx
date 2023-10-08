

import { Link } from 'react-router-dom'
const EmptyState = ({ message, address, label }) => {
  return (
    <div className='h-screen  max-w-2xl text-center gap-5 flex flex-col justify-center items-center pb-16 '>
      <div>
      <p className='text-gray-600 text-xl lg:text-3xl'>{message}</p>
      <Link to={address}>
       <button className='btn-third my-6'>{label}</button>
      </Link>
      </div>
    </div>
  )
}

export default EmptyState;