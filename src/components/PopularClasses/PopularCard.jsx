import { Zoom } from "react-reveal";
import { FaInfoCircle, FaUserFriends } from "react-icons/fa";
import { MdFormatListNumberedRtl } from "react-icons/md";

const PopularCard = ({ item }) => {
  const { photo, name, seats, price, students } = item;

  return (
    <Zoom>
      {/* <div className="border-[1px] border-neutral-200 shadow-lg bg-[#617453]  font-mono text-neutral-300 space-y-4 rounded-md group px-4 pb-8 ">
        <div className="flex justify-center items-center rounded-lg">
          <img
            className="group-hover:scale-110 rounded-3xl  p-4 transition object-cover max-w-[200px]"
            src={photo}
            alt=""
          />
        </div>
        <p className="uppercase font-bold pl-2">{name}</p>
        <p className="pl-2">Instructor:{item.instructor.name}</p>
        <div className="border-[1px] border-neutral-200 flex justify-center space-x-10 items-center text-yellow-500 ">
          <p>Available seats:{seats}</p>
          <p>students:{students}</p>
        </div>
      </div> */}

<div className="bg-white rounded-lg group overflow-hidden shadow-lg font-serif transition-transform duration-300 ease-in-out transform hover:scale-105">
      <img
        src={photo}
        alt="Sports"
        className="h-48 w-full object-cover group-hover:scale-110 transition"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-neutral-500">
          Instructor: {item.instructor.name}
        </h2>
        <div className="flex items-center text-gray-600 mb-2">
          <MdFormatListNumberedRtl className="mr-2" />
          Available Seats: {seats}
        </div>
        <div className="flex items-center text-gray-600">
          <FaUserFriends className="mr-2" />
          Number of Students: {students}
        </div>
      </div>
    </div>
    </Zoom>
  );
};

export default PopularCard;
