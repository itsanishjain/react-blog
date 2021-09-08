import React from "react";
import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const url = "http://localhost:8000/blogs";
  const { data: blogs, loading, error } = useFetch(url);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>loading.......</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;

// inside the template we write js by  {}

//Use Effect run on every render we use it for fetting data
// never chage state inside use effect
// empty dependency array make use effect run in intial reander only



// general browser send requ and server res with new html page
// here we consta req and res
// in react in first brow send req and sever 