import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { Bs0Circle } from "react-icons/bs";
import { useState } from "react";


const UpdateClass = () => {
  const update = useLoaderData();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false); // Initialize isSubmitting state

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const seats = form.seats.value;
    const price = form.price.value;

    const updateClass = { name, photo, seats, price };

    fetch(
      `http://localhost:5000/classes/${update._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateClass),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Class Update Successful");
          event.target.reset();
          navigate("/dashboard/my-classes");
        }
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="w-full p-16">
      <h1 className="text-2xl text-center font-semibold mb-4 text-gray-900">
        Update Class
      </h1>
      <form onSubmit={handleSubmit} className="max-w-[900px] mx-auto space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="location" className="block text-gray-600">
            Class Name
          </label>
          <input
            className="w-full px-4 py-3 text-gray-800 border focus:outline-gray-500 rounded"
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
            className="w-full px-4 py-3 text-gray-800 border focus:outline-gray-500 rounded"
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
            className="w-full px-4 py-3 text-gray-800 border focus:outline-gray-500 rounded"
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
            className="w-full px-4 py-3 text-gray-800 border focus:outline-gray-500 rounded"
            name="price"
            defaultValue={update.price}
            type="number"
            placeholder="price"
            required
          />
        </div>
        <button
          className={`bg-gray-900 w-full px-4 py-1 rounded-lg text-white flex justify-center items-center hover:bg-gray-500 ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Bs0Circle className="mr-1 inline-block animate-spin" />{" "}
              Updating....
            </>
          ) : (
            <>
              <FaRegEdit className="mr-1 inline-block" /> Update Class
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default UpdateClass;
