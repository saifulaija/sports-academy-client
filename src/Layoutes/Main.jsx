import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import LatestNav from "../components/LatestNav/LatestNav";




const Main = () => {
      return (
            <div>
                  {/* <Navbar></Navbar> */}
                  <LatestNav></LatestNav>
                  
                <div className="min-h[cal(100vh-68px)]">
                <Outlet></Outlet>
                </div>
                 <Footer></Footer> 
            </div>
      );
};

export default Main;