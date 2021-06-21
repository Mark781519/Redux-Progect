import { useState, useEffect } from "react";
import { Redirect, useParams } from "@reach/router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
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
  const [saving, setSaving] = useState(false);

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
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  function formIsValid() {
    const { title, authorId, category } = course;
    const errors = {};
    if (!title) errors.title = "title cannot be blank";
    if (!authorId) errors.authorId = "authorId cannot be blank";
    if (!category) errors.category = "category cannot be blank";
    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid()) return;

    setSaving(true);
    dispatch(saveCourse(course))
      .then(() => {
        toast.success("Course saved");
        setRedirect(true);
      })
      .catch((err) => {
        setErrors({ onSave: err.message });
        setSaving(false);
      });
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
          saving={saving}
        />
      </div>
    </div>
  );
};

export default ManageCoursesPage;
