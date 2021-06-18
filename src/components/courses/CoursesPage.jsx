import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { courseAdded } from "../../store/courses";

const initialCourse = {
  title: "",
};

const CoursesPage = () => {
  const [course, setCourse] = useState(initialCourse);

  const dispatch = useDispatch();
  const courses = useSelector((state) => state.entities.courses);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(courseAdded(course));
    setCourse(initialCourse);
  };

  return (
    <div className="container mt-5">
      <h1>Courses Page</h1>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                value={course.title}
                onChange={handleChange}
                name="title"
                id="title"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Add Course</button>
            </div>
          </div>
        </div>
      </form>

      {courses &&
        courses.map((course) => <p key={course.id}>{course.title}</p>)}
    </div>
  );
};

export default CoursesPage;
