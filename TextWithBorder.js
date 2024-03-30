import React from 'react';
import "./styles.css";
const TextWithBorder = ({ text }) => {
    return (
        <div className="text-container">
            <p className="bordered-text">{text}</p>
        </div>
    );
};

export default TextWithBorder;