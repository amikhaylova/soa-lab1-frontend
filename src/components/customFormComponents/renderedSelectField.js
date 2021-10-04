import React from "react";

export const renderedSelectField = ({label, value, options, selected, meta: {touched, error, warning}}) => (
    <div className="input-box">
        <div className="label">{label}</div>
        <select value={value}>
            {options.map(o => <option key={o} value={o} selected={selected === o}>{o} </option>)}
        </select>
        {touched && ((error && <span className="error">{error}</span>) || (warning &&
            <span className="error">{warning}</span>))}
    </div>
)