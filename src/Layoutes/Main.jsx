import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";


const Main = () => {
      return (
            <div>
                  <Navbar></Navbar>
                <div>
                <Outlet></Outlet>
                </div>
                 <Footer></Footer> 
            </div>
      );
};

export default Main;