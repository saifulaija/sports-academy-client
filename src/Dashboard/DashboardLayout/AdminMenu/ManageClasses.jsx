import { useQuery } from "@tanstack/react-query";
import ClassCard from "./ClassCard";

 

const ManageClasses = () => {


 
      const { data: classes = [], refetch } = useQuery(["classes"], async () => {
            const res = await fetch("http://localhost:5000/classes");
            return res.json();
          });




      return (
            <div className="max-w-[1050px] mx-auto bg-white p-16">
                 <h3 className="text-3xl font-bold text-center uppercase">Total class:{classes.length}</h3> 
                 <div className="grid md:grid-cols-3 gap-6">
                   {classes.map(item=> <ClassCard key={item._id} item={item}></ClassCard>)}
                 </div>
            </div>
      );
};

export default ManageClasses;