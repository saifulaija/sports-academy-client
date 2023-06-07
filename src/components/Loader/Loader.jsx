
import { ScaleLoader, FadeLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div
      className='
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    '
    >
      <FadeLoader size={100} color='red' />
    </div>
  )
}

export default Loader