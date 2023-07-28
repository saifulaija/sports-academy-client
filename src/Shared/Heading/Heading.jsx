import { FcSportsMode } from "react-icons/fc";


const Heading = ({heading, text}) => {
  return (
    <div className="flex justify-center items-center  text-neutral-500 max-w-[600px]">
      <div>
        <h3 className="text-sm text-center md:text-3xl uppercase md:tracking-widest  font-bold text-[#ff6c2f]">
         {heading}
        </h3>
        <div className="divider text-6xl"><FcSportsMode></FcSportsMode></div>
        <p className="text-center">
          {text}
         
        </p>
      </div>
    </div>
  );
};

export default Heading;
