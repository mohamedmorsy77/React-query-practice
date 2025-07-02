import React from "react";
import DataTable from "react-data-table-component";
const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: true,
    width: "70px",
  },
  {
    name: "Title",
    selector: (row) => row.title,
    // sortable: true,
    wrap: true,
    grow: 2,
    sortFunction: (a, b) => a.title.trim().length - b.title.trim().length,
  },
  {
    name: "Status",
    selector: (row) => String(row.status),
    sortable: true,
    width: "120px",
  },
  {
    name: "Top Rated",
    selector: (row) => (row.topRate ? "⭐" : "—"),
    center: true,
    width: "120px",
  },
];
function PostsTable({ posts , searchData , searchQuery }) {
  return (
    // <DataTable
    //   title="posts table"
    //   columns={columns}
    //   data={posts}
    //   responsive
    //   striped

    //   highlightOnHover
    // />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Top Rate</th>
        </tr>
      </thead>
      <tbody>
        {searchQuery ? (searchData?.map((post) => (
          <tr key={post.id}>
            <th scope="row">@@{post.id}</th>
            <td>{post.title}</td>
            <td>{post.status}</td>
            <td>{post.topRate ? "yes" : "no"}</td>
          </tr>
        ))): (posts?.map((post) => (
          <tr key={post.id}>
            <th scope="row">{post.id}</th>
            <td>{post.title}</td>
            <td>{post.status}</td>
            <td>{post.topRate ? "yes" : "no"}</td>
          </tr>
        )))}
      </tbody>
    </table>
  );
}

export default PostsTable;
