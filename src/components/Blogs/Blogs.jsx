import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const data = "blog.json";
    fetch(data)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div>
        {blogs.map((blog) => (
          <Blog></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

// github contributions
// github contributions

