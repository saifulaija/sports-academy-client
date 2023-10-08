import { useQuery } from "@tanstack/react-query";
import ClassCard from "./ClassCard";
import { toast } from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";

const ManageClasses = () => {

  
  const { data: classes = [], refetch, isLoading } = useQuery(["classes"], async () => {
    const res = await fetch("https://assignment-server-12-indol.vercel.app/classes");
    return res.json();
  });
  console.log(classes);
// TODO Modal created for send feedback
    const handleApproved=id=>{
      console.log(id);
      fetch(`https://assignment-server-12-indol.vercel.app/approved/${id}`,{
            method:'PATCH',
      })
      .then(res=> res.json())
      .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                  refetch()
                  toast.success('Status updated successful')
            }
      })
    }

    const handleDeny=id=>{
      console.log(id);
      fetch(`https://assignment-server-12-indol.vercel.app/deny/${id}`,{
            method:'PATCH',
      })
      .then(res=> res.json())
      .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                  refetch()
                  toast.success('Status deny successful')
            }
      })
    }





  return (
    <div className="max-w-[1050px] mx-auto  p-2">
      {isLoading? (<> <Loader></Loader></>):<><h3 className="heading-st">
        Total class:{classes.length}
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {classes.map((item) => (
          <ClassCard key={item._id} item={item} handleApproved={handleApproved} handleDeny={handleDeny}></ClassCard>
        ))}
      </div></>}
    </div>
  );
};

export default ManageClasses;
