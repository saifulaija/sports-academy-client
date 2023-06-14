import axios from "axios";
import NewClassCard from "./NewClassCard";
import { useEffect, useState } from "react";

const AllClasses = () => {
  const [allClass, setAllClass] = useState([]);
  useEffect(() => {
    axios.get("https://assignment-server-12-indol.vercel.app/all-classes").then((response) => {
      setAllClass(response.data);
    });
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1280px] mx-auto p-6">
        <h3 className="heading-st">Total Classes:{allClass.length}</h3>

        <div className="grid md:grid-cols-3 gap-4">
          {allClass.map((item) => (
            <NewClassCard key={item._id} item={item}></NewClassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
