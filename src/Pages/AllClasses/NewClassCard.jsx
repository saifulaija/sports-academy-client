import { useContext } from "react";
import { AiOutlineSelect } from "react-icons/ai";
import { AuthContext } from "../../Providers/AuthProvider";

const NewClassCard = ({ item }) => {
  const { photo, name, seats, price } = item;
  const { role } = useContext(AuthContext);
  console.log(role);
  return (
    <div
      className={`border-[1px] border-neutral-200 shadow-lg  font-mono text-neutral-600 space-y-4 rounded-md group ${
        seats<= 0 ? "bg-red-400" : ""
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
          disabled={seats === 0 || role === "admin" || role === "instructor"}
          className="btn-third "
        >
          {" "}
          <AiOutlineSelect className="inline-block"></AiOutlineSelect> Select
        </button>
      </div>
    </div>
  );
};

export default NewClassCard;
