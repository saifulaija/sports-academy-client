import AboutUs from "../../components/AboutUs/AboutUs";
import Feature from "../../components/Feature/Feature";

import PopularClasses from "../../components/PopularClasses/PopularClasses";
import PopularInstructor from "../../components/PopularInstructor/PopularInstructor";
import NewBanner from "../NewBanner/NewBanner";

const Home = () => {
  return (
    <div>
      <NewBanner></NewBanner>
      <PopularClasses></PopularClasses>
      <Feature></Feature>
      <PopularInstructor></PopularInstructor>

      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
