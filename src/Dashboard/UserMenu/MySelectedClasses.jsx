import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MySelectedClasses = () => {
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    data: booking = [],
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings/${user?.email}`);
      return res.json();
    },
  });

  console.log(booking);

  return <div>total class: {booking.length}</div>;
};

export default MySelectedClasses;
