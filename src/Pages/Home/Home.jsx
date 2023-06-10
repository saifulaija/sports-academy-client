import Banner from "../../components/Banner/Banner";
import PopularClasses from "../../components/PopularClasses/PopularClasses";
import PopularInstructor from "../../components/PopularInstructor/PopularInstructor";


const Home = () => {
      return (
            <div>
                <Banner></Banner>
                <PopularClasses></PopularClasses>
                <PopularInstructor></PopularInstructor>
            </div>
      );
};

export default Home;