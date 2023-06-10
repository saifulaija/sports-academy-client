import { useQuery } from "@tanstack/react-query";
import NewClassCard from "./NewClassCard";


const AllClasses = () => {

      const { data: allClass = [], refetch } = useQuery(["allClass"], async () => {
            const res = await fetch("http://localhost:5000/all-classes");
            return res.json();
          });
          console.log(allClass);




      return (
            <div className="w-full bg-white">
                 <div className="max-w-[1280px] mx-auto p-6">
                 <h3 className="heading-st">Total Classes:{allClass.length}</h3>

                  <div className="grid md:grid-cols-3 gap-4">
                        {allClass.map(item=> <NewClassCard key={item._id} item={item}></NewClassCard>)}
                  </div>
                  
                  
                  </div> 
                  
            </div>
      );
};

export default AllClasses;