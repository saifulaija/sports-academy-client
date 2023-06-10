import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateClass = () => {
  const update = useLoaderData();
  const navigate = useNavigate()

  

  const handleSubmit=event=>{
      event.preventDefault()
      const form = event.target 
      const name=form.name.value 
      const photo = form.photo.value 
      const seats = form.seats.value 
      const price = form.price.value 
     
      const updateClass = {name, photo, seats,price}

      fetch(`http://localhost:5000/classes/${update._id}`,{
            method:'PUT',
            headers:{
                  'content-type':'application/json'
            },
            body:JSON.stringify(updateClass)
      })
      .then(res=>res.json())
      .then(data=>{
           
            if(data.modifiedCount>0){
                  toast.success('Class Update Successful')
                 event.target.reset()
                 navigate('/dashboard/my-classes')
            }
      })
  }









  return (
    <div className="w-full bg-neutral-100 p-16">
      <h1 className=" text-xl md:text-3xl font-bold uppercase text-yellow-500 font-mono text-center py-6">
        {" "}
        Update Class
      </h1>
      <form onSubmit={handleSubmit} className="max-w-[900px] mx-auto space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="location" className="block text-gray-600">
            Class Name
          </label>
          <input
            className="w-full px-4 py-3 text-gray-800 border border-[#367379] focus:outline-[#367379] rounded-md "
            name="name"
            defaultValue={update.name}
            id="location"
            type="text"
            placeholder="Class Name"
            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="location" className="block text-gray-600">
            Image URL
          </label>
          <input
            className="w-full px-4 py-3 text-gray-800 border border-[#367379] focus:outline-[#367379] rounded-md "
            name="photo"
            defaultValue={update.photo}
            
            type="url"
            placeholder="Class Name"
            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="price" className="block text-gray-600">
            Available Seats
          </label>
          <input
            className="w-full px-4 py-3 text-gray-800 border border-[#367379] focus:outline-[#367379] rounded-md "
            name="seats"
            defaultValue={update.seats}
            type="number"
            placeholder="Available seats"
            required
          />
        </div>
       
        <div className="space-y-1 text-sm">
          <label htmlFor="price" className="block text-gray-600">
            price
          </label>
          <input
            className="w-full px-4 py-3 text-gray-800 border border-[#367379] focus:outline-[#367379] rounded-md "
            name="price"
            defaultValue={update.price}
            type="number"
            placeholder="price"
            required
          />
        </div>
        <button className="btn-primary font-mono" type="submit">
          {" "}
          Update Class
        </button>
      </form>
    </div>
  );
};

export default UpdateClass;
