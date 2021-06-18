import PropTypes from "prop-types";

const TextInput = ({ name, label, handleChange, value, error }) => {
  let wrapperClass = "form-group";

  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        className="form-control"
        placeholder={label}
        value={value}
        onChange={handleChange}
      />
      {error && <div className="error text-danger">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  value: "",
  error: "",
};

export default TextInput;
