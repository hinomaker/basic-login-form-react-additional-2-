import React from "react";
import "./SignUpForm.css";

const SignUpForm = ({
  inputLabel,
  labelName,
  inputType,
  placeholderText,
  requiredCondition,
  onChangeHandler,
  value,
}) => {
  return (
    <div>
      <label htmlFor={inputLabel}>{labelName}</label>
      {requiredCondition && (
        <span style={{ marginLeft: "10px", fontSize: "12px" }}>
          필수 <span style={{ color: "red" }}>*</span>
        </span>
      )}
      <br />
      <input
        id={inputLabel}
        type={inputType}
        placeholder={placeholderText}
        required={requiredCondition}
        onChange={onChangeHandler}
        value={value}
      />
      <br />
    </div>
  );
};

export default SignUpForm;
