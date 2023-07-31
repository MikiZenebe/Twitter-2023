import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useCurrentUser = () => {
  const { data, error, isLoading } = useSWR("/api/current", fetcher);
  console.log(data);
  return {
    data,
    error,
    isLoading,
  };
};

export default useCurrentUser;
