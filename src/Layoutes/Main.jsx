import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import LatestNav from "../components/LatestNav/LatestNav";

const Main = () => {
  return (
    <div>
      <LatestNav></LatestNav>

      <div className="min-h-[calc(100vh-190px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
