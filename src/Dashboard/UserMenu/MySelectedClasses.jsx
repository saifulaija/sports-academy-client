import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Loader from "../../components/Loader/Loader";
import { TiDocumentDelete } from "react-icons/ti";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import EmptyState from "../../Shared/EmptyState/EmptyState";

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
      const res = await fetch(`https://assignment-server-12-saifulaija.vercel.app/bookings/${user?.email}`);
      return res.json();
    },
  });

  // const remaining = booking.filter((item) => (item.payment = "pending"));
  // setBookingClasses(remaining);

  const handleDelete = (id) => {
    fetch(`https://assignment-server-12-saifulaija.vercel.app/bookings/${id}`, {
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
   <>
   
   {
    booking && Array.isArray(booking) && booking.length > 0 ?  <div className="w-full font-mono font-semibold">
    <h3 className="heading-st">
      Your total selected class: {booking.length}
    </h3>
    <div className="overflow-x-auto">
      <table className="table text-neutral-500   font-mono">
        {/* head */}
        <thead className="text-[18px]">
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
                <Link to={`/dashboard/payment/${item._id}`}>
                  {" "}
                  <button className="btn-third">
                    {" "}
                    <AiOutlineDollarCircle className="inline-block"></AiOutlineDollarCircle>{" "}
                    Pay
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div> :<EmptyState message={'You have no selected Class'} address={'/all-classes'} label={'Browse Class'}></EmptyState>
   }
   
   
   </>
  );
};

export default MySelectedClasses;
