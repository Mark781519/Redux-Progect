import { Link } from "@reach/router";
import { useSelector } from "react-redux";
import CoursesList from "./CoursesList";
import useCourses from "../../hooks/useCourses";
import { FullSpinner } from "../../styles/app";

const CoursesPage = () => {
  const { courses } = useCourses();

  const { loading } = useSelector((state) => state.apiStatus);

  if (loading > 0) {
    return <FullSpinner />;
  }

  return (
    <div className="container mt-5">
      <h1>Courses Page</h1>
      <Link to="/course/new" className="btn btn-primary btn-lg">
        Add Course
      </Link>
      <CoursesList courses={courses} />
    </div>
  );
};

export default CoursesPage;
