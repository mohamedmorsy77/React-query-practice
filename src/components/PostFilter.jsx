import React from "react";

function PostFilter({selectedStatus, setSelectedStatus}) {
  return (
    <select
      class="form-select mt-4"
      value={selectedStatus}
      onChange={(e) => setSelectedStatus(e.target.value)}
    >
      <option value="all">all</option>
      <option value="published">published</option>
      <option value="draft">draft</option>
      <option value="block">block</option>
    </select>
  );
}

export default PostFilter;
