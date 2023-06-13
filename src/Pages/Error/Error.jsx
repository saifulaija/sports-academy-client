import "./Error.css";
import error from "../../../src/assets/error.jpg";

import {AiOutlineRollback  } from "react-icons/ai";
import { Link } from "react-router-dom";


const Error = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-y-8 font-abc">
        <img className="max-w-[450px]" src={error} sizes="50" alt="" />
      <Link to='/'> <button className="btn-third"> <AiOutlineRollback className="inline-block"></AiOutlineRollback> Back to home</button></Link>
        
      </div>
    
    </>
  );
};

export default Error;
