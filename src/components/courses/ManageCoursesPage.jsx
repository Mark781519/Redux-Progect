import { useState, useEffect } from "react";
import { Redirect, useParams } from "@reach/router";
import { useSelector } from "react-redux";
import useCourses from "../../hooks/useCourses";
import CourseForm from "./CourseForm";
import { saveCourse } from "../../store/courses";
import { FullSpinner } from "../../styles/app";

const newCourse = {
  title: "",
  id: null,
  authorId: "",
  category: "",
};

const ManageCoursesPage = () => {
  const [course, setCourse] = useState(newCourse);
  const [errors, setErrors] = useState({});
  const [redirect, setRedirect] = useState(false);

  const { slug } = useParams();
  const { dispatch, courses, authors } = useCourses();

  const { loading } = useSelector((state) => state.apiStatus);

  useEffect(() => {
    const course =
      slug !== "new" && courses.length
        ? courses.find((c) => c.slug === slug)
        : newCourse;
    setCourse(course);
  }, [courses, slug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => ({
      ...prev,
      [name]: name === "authorId" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveCourse(course)).then(() => setRedirect(true));
  };

  return (
    <div className="container mt-5">
      {loading > 0 && <FullSpinner />}
      {redirect && <Redirect to="/courses" noThrow />}
      <div className="row">
        <CourseForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          course={course}
          authors={authors}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default ManageCoursesPage;
