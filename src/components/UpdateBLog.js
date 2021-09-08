import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const UpdateBLog = () => {
  const { blog } = useParams();

  console.log(blog)
  // const {
  //   data: blog,
  //   loading,
  //   error,
  // } = useFetch("http://localhost:8000/blogs/" + id);

  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");

  //   useEffect(() => {
  //     fetch("http://localhost:8000/blogs/" + id)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         setTitle(json.title);
  //         setBody(json.body);
  //       })
  //       .catch((error) => console.log("ERROR!!!!!", error));
  //   }, []);

  return (
    <div>
      {/* {loading && <div>loading.....</div>}
      {error && <div>{error} (.</div>}

      {blog ? <div><input value={    }></input></div> : <div>AJ BLOGS</div>} */}

      hi
    </div>
  );
};

export default UpdateBLog;
