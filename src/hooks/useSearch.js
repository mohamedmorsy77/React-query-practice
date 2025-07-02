import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function searchPost(q) {

  let res = await axios.get(`http://localhost:3008/posts?q=${q}`);
  
  return res.data;
}

function useSearch(q) {
  return useQuery({
    queryKey: ["posts", {q}],
    queryFn: () => searchPost(q),
    staleTime: 1000 * 1 * 60,
    enabled: true ,
  });
}

export default useSearch;
