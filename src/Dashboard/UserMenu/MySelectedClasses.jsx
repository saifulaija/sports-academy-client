import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Loader from "../../components/Loader/Loader";
import { TiDocumentDelete } from "react-icons/ti";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { toast } from "react-hot-toast";
// TODO pay button have to implemented

const MySelectedClasses = () => {
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    data: booking = [],
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings/${user?.email}`);
      return res.json();
    },
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Delete Class Successfully");
        }
      });
  };

  console.log(booking);
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="w-full">
      <h3 className="heading-st">Your total class: {booking.length}</h3>
      <div className="overflow-x-auto">
        <table className="table font-mono">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Available Seats</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td className="text-center">{item.seats}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn-third"
                  >
                    <TiDocumentDelete className="inline-block"></TiDocumentDelete>{" "}
                    Delete
                  </button>
                </td>
                <td>
                  <button className="btn-third">
                    {" "}
                    <AiOutlineDollarCircle className="inline-block"></AiOutlineDollarCircle>{" "}
                    Pay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;

