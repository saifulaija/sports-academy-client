import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { addClass } from "../../api/classes";
import { toast } from "react-hot-toast";


const AddClass = () => {

      const {user} = useContext(AuthContext)

      const handleSubmit = event =>{
            event.preventDefault()
            
            const name = event.target.name.value 
            const photo = event.target.photo.value
            const price = event.target.price.value
            const seats = event.target.seats.value
            const status = 'pending'
            const instructor={
                  name: user.displayName,
                  email: user.email
            }
            const addClass2 ={
                  name, photo, price, seats,instructor,status 
            }
          
            addClass(addClass2)
            .then(data=>{

                  if(data.insertedId){
                        toast.success('Class Added successful')
                        event.target.reset()
                  }

                  console.log(data);
            })
            .catch(err=>{
                  console.log(err);
            })


      }

    


   
      return (
           <div className="w-full bg-neutral-100 p-16">

            <h1 className="text-3xl font-bold text-center uppercase">Add Class</h1>
            <form onSubmit={handleSubmit} className="max-w-[900px] mx-auto space-y-6">

            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Class Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-[#367379] focus:outline-[#367379] rounded-md '
                name='name'
                id='location'
                type='text'
                placeholder='Class Name'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Image URL
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-[#367379] focus:outline-[#367379] rounded-md '
                name='photo'
                id='location'
                type='url'
                placeholder='Class Name'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                  Available Seats
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-[#367379] focus:outline-[#367379] rounded-md '
                  name='seats'
                
                  type='number'
                  placeholder='Available seats'
                  required
                />
              </div>
            <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                  price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-[#367379] focus:outline-[#367379] rounded-md '
                  name='price'
                 
                  type='number'
                  placeholder='price'
                  required
                />
              </div>
              <button className="btn-primary" type="submit"> Add Class</button>
            </form>

           </div>
      );
};

export default AddClass;