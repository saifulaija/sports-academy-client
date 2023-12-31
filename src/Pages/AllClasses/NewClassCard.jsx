import { useContext } from "react";
import { AiOutlineSelect } from "react-icons/ai";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import {  Zoom } from "react-reveal";
import { FaChair, FaDollarSign } from "react-icons/fa";
const NewClassCard = ({ item }) => {
  const { photo, name, seats, price, _id } = item;
  const { role, user, loading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const selectButton = (item) => {
    if (user && user?.email) {
      const orderClass = {
        name,
        photo,
        classId: _id,
        price,
        seats,
        email: user.email,
        payment: "pending",
      };

      console.log(orderClass);
      fetch("https://assignment-server-12-saifulaija.vercel.app/bookings", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Class Successfully Selected");
            console.log(data);
          }
        });
    } else {
      Swal.fire({
        title: "To select first Login Now",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
 
   const navigation = useNavigation()
  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }

  return (
    <Zoom>
      <div className="border bg-neutral-50 border-gray-200 group rounded-lg shadow-md p-6 space-y-4">
        <div className="flex justify-center items-center h-40 rounded-lg overflow-hidden">
          <img
            src={photo}
            alt="Course"
            className="object-cover w-full h-full transform scale-100 group-hover:scale-105 transition"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">Instructor: {item.instructor.name}</p>
        <div className="flex justify-between items-center text-[#ff6c2f]">
          <p>
            <FaChair className="inline-block mr-1" />
            Seats: {seats}
          </p>
          <p>
            <FaDollarSign className="inline-block mr-1" />
            Price: {price}
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={() => selectButton(item)}
            disabled={seats <= 0 || role === "admin" || role === "instructor"}
            className={`btn-fourth ${
              seats <= 0 || role === "admin" || role === "instructor"
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <AiOutlineSelect className="inline-block" /> Select
          </button>
        </div>
      </div>
    </Zoom>
  );
};

export default NewClassCard;
