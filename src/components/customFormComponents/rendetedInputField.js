import React from "react";

export const renderedInputField = ({input, label, readonly, type, meta: {touched, error, warning}}) => (
    <div className="input-box">
        <div className="label">{label}</div>
        <input {...input} placeholder={label} type={type} readOnly={readonly}
               className={touched && error ? "input-error" : ""}/>
        {touched && ((error && <span className="error">{error}</span>) || (warning &&
            <span className="error">{warning}</span>))}
    </div>
)