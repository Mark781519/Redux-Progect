import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CourseForm = ({
  course,
  authors,
  handleSubmit,
  handleChange,
  saving,
  errors,
}) => {
  return (
    <form onSubmit={handleSubmit} className="col-md-4">
      <h1>{course.id ? "Edit" : "Add"} course</h1>

      {errors.onSave && (
        <div className="alert alert-danger">{errors.onSave}</div>
      )}

      <TextInput
        name="title"
        label="title"
        handleChange={handleChange}
        value={course.title}
        error={errors.title}
      />

      <SelectInput
        name="authorId"
        title="authorId"
        defaultOption="Select Author"
        label="Select Author"
        value={course.authorId || ""}
        handleChange={handleChange}
        error={errors.authorId}
        options={authors.map((a) => ({ value: a.id, text: a.name }))}
      />

      <TextInput
        name="category"
        label="category"
        handleChange={handleChange}
        value={course.category}
        error={errors.category}
      />

      <button className="btn btn-primary btn-lg" disabled={saving}>
        {saving ? "Saving" : "Save"}
      </button>
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  errors: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};
export default CourseForm;
