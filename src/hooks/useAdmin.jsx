import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import useUser from "./useUser";

const useAdmin = () => {
  const [user] = useUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const { data } = useFetch(
    ["myOrders"],
    `https://infinite-escarpment-69850.herokuapp.com/user/${user?.email}`
  );

  useEffect(() => {
    if (user && data) {
      setIsAdmin(data.role === "admin");
    }
  }, [user, data]);
  return isAdmin;
};

export default useAdmin;
