// import { Outlet } from "react-router-dom";
// import Footer from "../Pages/Footer/Footer";
// import LatestNav from "../components/LatestNav/LatestNav";

// const Main = () => {
//   return (
//     <div>
//       <LatestNav></LatestNav>

//       <div className="min-h-[calc(100vh-190px)]">
//         <Outlet></Outlet>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default Main;


import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import LatestNav from "../components/LatestNav/LatestNav";
import PreeLoader from "../Shared/PreeLoader/PreeLoader";

const Main = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the preloader after 5 seconds
    const preloaderTimeout = setTimeout(() => {
      setShowPreloader(false);
    }, 2000);

    // Clear the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(preloaderTimeout);
  }, []); // The empty dependency array ensures that the effect runs only once

  return (
    <div>
      {showPreloader && (
        // Your preloader component goes here (replace this with your actual preloader)
        <div className="preloader">
          <PreeLoader></PreeLoader>
        </div>
      )}

      {!showPreloader && (
        <>
          <LatestNav></LatestNav>

          <div className="min-h-[calc(100vh-190px)]">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default Main;
