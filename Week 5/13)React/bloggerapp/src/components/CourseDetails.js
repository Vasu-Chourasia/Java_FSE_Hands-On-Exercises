import React from "react";

const courses = [
  {
    id: 1,
    name: "Angular",
    date: "4/5/2021"
  },
  {
    id: 2,
    name: "React",
    date: "6/3/2021"
  }
];

function CourseDetails() {
  return (
    <div>
      <h1>Course Details</h1>

      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <h5>{course.date}</h5>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;