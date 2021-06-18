import React from "react";
import PropTypes from "prop-types";

const SelectInput = ({
  name,
  label,
  handleChange,
  defaultOption,
  value,
  options,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <div className="field">
        <select
          name={name}
          value={value}
          onChange={handleChange}
          className="form-control"
        >
          <option value="-1">{defaultOption}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.text}
            </option>
          ))}
        </select>

        {error && <div className="error text-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
};
SelectInput.defaultProps = {
  value: "",
  error: "",
};

export default SelectInput;
