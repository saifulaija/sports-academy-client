

import { FcSportsMode } from "react-icons/fc";
import { BiLocationPlus } from "react-icons/bi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => {



  return (
    <div>
    <footer className="footer bg-[#617453] border-t-[1px] footer-center px-16 pt-16  text-base-content rounded font-mono">
     <div className="md:flex justify-between gap-8 ">
     <div className="flex flex-col">
           <div className="flex justify-center items-center ">
           <FcSportsMode size={50} className=""></FcSportsMode>
            <h1 className=" text-sm md:text-2xl text-yellow-400 font-abc uppercase font-semibold">Sports Academy</h1>
           </div>
           <div className="flex justify-center items-center ">
           <BiLocationPlus className='text-neutral-200' size={25}></BiLocationPlus>
            <p className=" text-sm md:text-lg text-neutral-200 mont-mono font-semibold">Bonani Dhaka-1200</p>
           </div>
           <div className="flex justify-center gap-2 items-center ">
           <AiOutlineMail size={20} className='text-neutral-200 ml-2'></AiOutlineMail>
            <h1 className=" text-md  text-neutral-200 mont-mono font-semibold">bgbangla@gmail.com</h1>
           </div>
           <div className="flex justify-center gap-2 items-center ">
           <AiOutlinePhone size={25} className='text-neutral-200 ml-2'></AiOutlinePhone>
            <h1 className=" text-md text-neutral-200 mont-mono font-semibold">+880172568695</h1>
           </div>
          

      </div>
      <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
  <div>
    <div className="grid grid-flow-col gap-4 text-yellow-400">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div> 
     </div>
  <div>
    <p className="text-neutral-100">Copyright © 2023 - All right reserved by BD Sports Academy Ltd</p>
  </div>
</footer>
    </div>
  );
};

export default Footer;
