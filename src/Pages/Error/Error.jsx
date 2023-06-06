import './Error.css'
import error from '../../../src/assets/error.jpg'

const Error = () => {
      return (
            <div className=' flex justify-center items-center'>
                <img className='max-w-[450px]' src={error} sizes='50' alt="" />
            </div>
      );
};

export default Error;