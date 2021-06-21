import { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

const CoursesList = ({ courses, handleDelete }) => {
  if (!courses.length) {
    return null;
  }

  console.log("RERENDER");
  return (
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={course.id}>
            <td>{index + 1}</td>
            <td>
              <Link to={`/course/${course.slug}`}>{course.title}</Link>
            </td>
            <td>{course.authorName}</td>
            <td>{course.category}</td>
            <td>
              <button
                onClick={() => handleDelete(course)}
                className="btn btn-outline-danger"
              >
                delete course
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

CoursesList.propTypes = {
  courses: PropTypes.array.isRequired,
};

CoursesList.defaultProps = {
  courses: [],
};

export default memo(CoursesList);
