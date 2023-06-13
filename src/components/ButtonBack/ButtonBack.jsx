import { Link } from "react-router-dom";


const ButtonBack = ({address, label, icon}) => {
      return (
            <div>
               <Link to={address}> <button className="btn-third "  >{icon}{label}  </button>  </Link>
            </div>
      );
};

export default ButtonBack;