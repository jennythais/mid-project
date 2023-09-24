import React from "react";

const Input = ({ label, required, error, renderInput, ...inputProps }) => {
  return (
    <div className="form-group">
      <label className="label">
        {label} {required && <span>*</span>}
      </label>
      {renderInput?.({ ...inputProps, error }) || (
        <input
          type="text"
          className={`form__input ${error ? "formerror" : ""}`}
        />
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
