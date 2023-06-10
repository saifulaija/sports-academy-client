import { useQuery } from "@tanstack/react-query";
import NewClassCard from "./NewClassCard";
import { useEffect, useState } from "react";


const AllClasses = () => {

       const [allClass, setAllClass] = useState([])
       useEffect(()=>{
            fetch('http://localhost:5000/all-classes')
            .then(res=>res.json())
            .then(data=>setAllClass(data))
       },[])



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