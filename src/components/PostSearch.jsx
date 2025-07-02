import React, { useState } from "react";
import useSearch from "../hooks/useSearch";

function PostSearch({ setSearchQuery }) {
  const [query, setQuery] = useState("");
  

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query);
  };
  return (
    <form onSubmit={handleSearch}>
      <div className="d-flex flex-column">
        <label className="mb-2">Search by post</label>
        <input
          className="form-control"
          type="text"
          placeholder="search....."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary mt-2 ">Search</button>
      </div>
    </form>
  );
}

export default PostSearch;
