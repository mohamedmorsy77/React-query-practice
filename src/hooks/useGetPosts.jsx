import { useQuery } from "@tanstack/react-query";
import axios from "axios";


async function fetchPosts(selectedStatus, sq) {
  console.log(selectedStatus)
  if (selectedStatus === "all" && !sq) {
    const res = await axios.get("http://localhost:3008/posts");
    return res.data;
  } else {
     const res = await axios.get(`http://localhost:3008/posts?status=${selectedStatus}`);
    return res.data;
  }
}

function useGetPosts(selectedStatus,searchQuery) {
  return useQuery({
    queryKey: ["posts", {selectedStatus}],
    queryFn: () => fetchPosts(selectedStatus,searchQuery),
    staleTime: 1000 * 6,
    refetchOnWindowFocus: true
    
  });
}

export default useGetPosts;
