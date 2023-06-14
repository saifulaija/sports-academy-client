import { useContext } from "react";
import { AiOutlineSelect } from "react-icons/ai";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import { Zoom} from "react-reveal";

const NewClassCard = ({ item }) => {
  const { photo, name, seats, price, _id } = item;
  const { role, user, loading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const selectButton = (item) => {
   
     
     if(user && user?.email) {
      const orderClass = {
        name,
        photo,
        classId: _id,
        price,
        seats,
        email: user.email,
        payment:'pending'
      };
      
      console.log(orderClass);
      fetch("https://assignment-server-12-indol.vercel.app/bookings", {
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
    else{
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

  if(loading){
      return <Loader></Loader>
  }


  return (
   <Zoom>
       <div
      className={`border-[1px] border-neutral-200 shadow-lg  font-mono text-neutral-100  space-y-4 bg-[#617453] rounded-md group ${
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
   </Zoom>
  );
};

export default NewClassCard;
