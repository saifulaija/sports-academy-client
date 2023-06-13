import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { addClass } from "../../api/classes";
import { toast } from "react-hot-toast";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const price = parseFloat(event.target.price.value);
    const seats =parseFloat(event.target.seats.value);
    // const students=parseFloat(event.target.students.value);
    const students=parseFloat('0');

    const status = "pending";
    const instructor = {
      name: user.displayName,
      email: user.email,
    };
    const addClass2 = {
      name,
      photo,
      price,
      seats,
      instructor,
      status,
      students,
    };

    addClass(addClass2)
      .then((data) => {
        if (data.insertedId) {
          toast.success("Class Added successful");
          event.target.reset();
        }

        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full p-16">
      <h1 className="heading-st">Add Class</h1>
      <form onSubmit={handleSubmit} className="max-w-[900px] mx-auto space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="location" className="block text-gray-500">
            Class Name
          </label>
          <input
            className="w-full px-4 py-3 text-gray-800 border border-yellow-500 focus:outline-yellow-500 rounded-md "
            name="name"
            id="location"
            type="text"
            placeholder="Class Name"
            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="location" className="block text-neutral-500">
            Image URL
          </label>
          <input
            className="w-full px-4 py-3 text-gray-800 border border-yellow-500 focus:outline-yellow-500 rounded-md "
            name="photo"
            id="location"
            type="url"
            placeholder="Class Name"
            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="price" className="block text-neutral-500">
            Available Seats
          </label>
          <input
          
            className="w-full px-4 py-3 text-gray-800 border border-yellow-500 focus:outline-yellow-500 rounded-md "
            name="seats"
            type="number"
            placeholder="Available seats"
            required
          />
        </div>
        {/* <div className="space-y-1 text-sm">
          <label htmlFor="price" className="block text-neutral-500">
            Enrolled Students
          </label>
          <input
            className="w-full px-4 py-3 text-gray-800 border border-yellow-500 focus:outline-yellow-500 rounded-md "
            name="students"
            type="number"
            placeholder="Available seats"
            required
          />
        </div> */}
        <div className="space-y-1 text-sm">
          <label htmlFor="price" className="block text-neutral-500">
            price
          </label>
          <input
            className="w-full px-4 py-3 text-gray-800 border border-yellow-500 focus:outline-yellow-500 rounded-md "
            name="price"
            type="number"
            placeholder="price"
            required
          />
        </div>
        <button className="btn-third" type="submit">
          {" "}
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClass;
