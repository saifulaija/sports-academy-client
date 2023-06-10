import { useContext } from "react";
import { AiOutlineSelect } from "react-icons/ai";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const NewClassCard = ({ item }) => {
  const { photo, name, seats, price, _id } = item;
  const { role, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const selectButton = (item) => {
    console.log(item);
    if (!user) {
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
    } else {
      const orderClass = {
        name,
        photo,
        classId: _id,
        price,
        email: user.email,
      };
      console.log(orderClass);
      fetch("http://localhost:5000/bookings", {
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
    }
  };

  return (
    <div
      className={`border-[1px] border-neutral-200 shadow-lg  font-mono text-neutral-600 space-y-4 rounded-md group ${
        seats <= 0 ? "bg-red-400" : ""
      }`}
    >
      <div className="flex justify-center items-center rounded-lg">
        <img
          className="group-hover:scale-110 rounded-3xl  p-4 transition object-cover max-w-[200px]"
          src={photo}
          alt=""
        />
      </div>
      <p className="uppercase font-bold pl-2">{name}</p>
      <p className="pl-2">Instructor: {item.instructor.name}</p>
      <div className="border-[1px] border-neutral-200 flex justify-center space-x-10 items-center text-yellow-500 ">
        <p>seats:{seats}</p>
        <p>price:{price}</p>
      </div>
      <div className="text-center py-4">
        <button
          onClick={() => selectButton(item)}
          disabled={seats <= 0 || role === "admin" || role === "instructor"}
          className="btn-third "
        >
          <AiOutlineSelect className="inline-block"></AiOutlineSelect> Select
        </button>
      </div>
    </div>
  );
};

export default NewClassCard;
