import DataTable from "datatables.net-dt";
import "./App.css";
import useGetPosts from "./hooks/useGetPosts";
import PostsTable from "./PostsTable";
import { useState } from "react";
import PostFilter from "./components/PostFilter";
import PostSearch from "./components/PostSearch";
import useSearch from "./hooks/useSearch";

function App() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: posts,
    isError,
    isLoading,
    error,
    isFetching,
    isStale,
    refetch,
  } = useGetPosts(selectedStatus, searchQuery);
  const {
    data: searchData,
    isError: searchError,
    isLoading: searchLoading,
  } = useSearch(searchQuery);

 const finalPosts =
  searchQuery.length > 0 && searchData ? searchData : posts;


console.log('finalPost', finalPosts)
console.log('searchData ', searchData )
  return (
    <div className="container">
      {/* {isStale && <button onClick={() => refetch()}>reFetch</button>} */}
      <div class="row">
        <div class="col-8">
          <PostsTable posts={finalPosts} searchData={searchData} searchQuery={searchQuery} />
        </div>
        <div class="col-4">
          <PostSearch setSearchQuery={setSearchQuery} />
          {searchQuery.length === 0 && (
            <PostFilter
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
