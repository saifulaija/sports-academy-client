import { Zoom} from "react-reveal";

const PopularCard = ({ item }) => {
  const { photo, name, seats, price, students } = item;

  return (
  
       <Zoom>

<div className="border-[1px] border-neutral-200 shadow-lg bg-[#617453]  font-mono text-neutral-300 space-y-4 rounded-md group px-4 pb-8 ">
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
    </div>

       </Zoom>
   
  );
};

export default PopularCard;
