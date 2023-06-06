import "./Error.css";
import error from "../../../src/assets/error.jpg";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import {AiOutlineRollback  } from "react-icons/ai";


const Error = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-y-8 font-abc">
        <img className="max-w-[450px]" src={error} sizes="50" alt="" />
        <ButtonBack label='back to home' address='/' icon={<AiOutlineRollback/>}> </ButtonBack>
        
      </div>
    
    </>
  );
};

export default Error;
