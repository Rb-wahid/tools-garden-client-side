import { useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase.init";

const useUser = () => {
  const [user, loading, error] = useAuthState(auth);

  const userMemo = useMemo(() => user, [user]);
  return [userMemo, loading, error];
};

export default useUser;
