import { useQuery } from "react-query";
import axiosPrivate from "../auth/axiosPrivate";

const fetcher = async (url) => {
  const { data } = await axiosPrivate.get(url);
  return data;
};

const useFetch = (key, url) => {
  //  const { isLoading, isError, data, error }
  return useQuery([...key, url], () => fetcher(url));
};

export default useFetch;
