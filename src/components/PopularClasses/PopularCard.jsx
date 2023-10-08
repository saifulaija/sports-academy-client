import { Zoom } from "react-reveal";
import { FaInfoCircle, FaUserFriends } from "react-icons/fa";
import { MdFormatListNumberedRtl } from "react-icons/md";

const PopularCard = ({ item }) => {
  const { photo, name, seats, price, students } = item;

  return (
    <Zoom>
      <div className=" border  group overflow-hidden rounded-sm  font-serif transition-transform duration-300 ease-in-out transform hover:scale-105">
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
