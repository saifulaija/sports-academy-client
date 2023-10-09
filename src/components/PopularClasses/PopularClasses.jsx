import { useContext, useEffect, useState } from "react";

import PopularCard from "./PopularCard";
import { AuthContext } from "../../Providers/AuthProvider";
import Loader from "../Loader/Loader";
import Heading from "../../Shared/Heading/Heading";


const PopularClasses = () => {
  const { loading } = useContext(AuthContext);

  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/six-classes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
      });
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="w-full p-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-center items-center">
          
          <Heading>Popular Classes</Heading>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {classes.map((item) => (
            <PopularCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;

