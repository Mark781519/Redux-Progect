import { Link } from "@reach/router";
import { useSelector } from "react-redux";
import CoursesList from "./CoursesList";
import useCourses from "../../hooks/useCourses";
import { FullSpinner } from "../../styles/app";
import { deleteCourse, courseAdded } from "../../store/courses";
import { toast } from "react-toastify";

const CoursesPage = () => {
  const { courses } = useCourses();
  const { dispatch } = useCourses();

  const { loading } = useSelector((state) => state.apiStatus);

  const handleDelete = async (course) => {
    toast.success("Course deleted");
    try {
      await dispatch(deleteCourse(course));
    } catch (err) {
      toast.error("Delete falled " + err.message, { autoClose: false });
      dispatch(courseAdded(course));
    }
  };

  if (loading > 0) {
    return <FullSpinner />;
  }

  return (
    <div className="container mt-5">
      <h1>Courses Page</h1>
      <Link to="/course/new" className="btn btn-primary btn-lg">
        Add Course
      </Link>
      <CoursesList courses={courses} handleDelete={handleDelete} />
    </div>
  );
};

export default CoursesPage;
