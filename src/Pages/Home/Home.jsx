import AboutUs from "../../components/AboutUs/AboutUs";

import PopularClasses from "../../components/PopularClasses/PopularClasses";
import PopularInstructor from "../../components/PopularInstructor/PopularInstructor";
import NewBanner from "../NewBanner/NewBanner";


const Home = () => {
      return (
            <div>
                <NewBanner></NewBanner>
                <PopularClasses></PopularClasses>
                <PopularInstructor></PopularInstructor>
                
                <AboutUs></AboutUs>
            </div>
      );
};

export default Home;