import React from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";



const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory()

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("deleted");
      history.push("/");
    });
  };


  const {
    data: blog,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      {loading && <div>loading.....</div>}
      {error && <div>{error} (.</div>}
      {blog && (
        <article className="blog-details">
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
          <Link to={`/update/${blog.id}`}><button style={{marginLeft:"10px"}}>Update</button></Link>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
