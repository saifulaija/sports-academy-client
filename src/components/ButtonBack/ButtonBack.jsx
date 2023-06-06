import { Link } from "react-router-dom";


const ButtonBack = ({address, label, icon}) => {
      return (
            <div>
               <Link to={address}> <button className="bg-[#0085ad] px-6 py-2 font-abc font-semibold uppercase text-white rounded-md  flex items-center justify-center gap-2 hover:bg-[#4491a8] transition "  >{icon}{label}  </button>  </Link>
            </div>
      );
};

export default ButtonBack;