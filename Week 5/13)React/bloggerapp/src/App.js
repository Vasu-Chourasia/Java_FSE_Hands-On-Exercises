import React from "react";

import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {

  const showCourses = true;
  const showBooks = true;
  const showBlogs = true;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "40px"
      }}
    >
      {showCourses && <CourseDetails />}

      {showBooks ? <BookDetails /> : null}

      {showBlogs ? <BlogDetails /> : <h2>No Blogs Available</h2>}
    </div>
  );
}

export default App;