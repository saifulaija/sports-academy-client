import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { addClass } from "../../api/classes";
import { toast } from "react-hot-toast";
import { FaAddressCard } from "react-icons/fa";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const price = parseFloat(event.target.price.value);
    const seats = parseFloat(event.target.seats.value);
    const students = parseFloat("0");
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
          toast.success("Class Added successfully");
          event.target.reset();
          setIsSubmitting(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsSubmitting(false);
      });
  };

  return (
    <div className="w-full p-2 md:p-10 rounded container mx-auto border">
      <h1 className="text-2xl font-semibold mb-6 text-gray-900 text-center">
        Add Class
      </h1>
      <form onSubmit={handleSubmit} className="max-w-[900px] mx-auto space-y-6">
        <div className="space-y-4 text-sm">
          <div className="space-y-1">
            <label htmlFor="name" className="block text-gray-500">
              Class Name
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border  focus:outline-gray-500 rounded"
              name="name"
              id="name"
              type="text"
              placeholder="Class Name"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="photo" className="block text-gray-500">
              Image URL
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border  focus:outline-gray-500 rounded"
              name="photo"
              id="photo"
              type="url"
              placeholder="Image URL"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="seats" className="block text-gray-500">
              Available Seats
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border  focus:outline-gray-500 rounded"
              name="seats"
              id="seats"
              type="number"
              placeholder="Available seats"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="price" className="block text-gray-500">
              Price
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border  focus:outline-gray-500 rounded"
              name="price"
              id="price"
              type="number"
              placeholder="Price"
              required
            />
          </div>
        </div>
        <button
          className={`${
            isSubmitting
              ? "bg-gray-500 w-full cursor-not-allowed"
              : "bg-gray-900 hover:bg-gray-700 w-full"
          } px-4 py-2 rounded-lg text-white flex justify-center items-center transition duration-300 ease-in-out`}
          type="submit"
          disabled={isSubmitting} 
        >
          {isSubmitting ? (
            "Adding..."
          ) : (
            <FaAddressCard className="mr-2 text-xl" />
          )}{" "}
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClass;
