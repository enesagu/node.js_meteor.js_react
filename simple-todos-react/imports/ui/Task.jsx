// Task.jsx
import React from 'react';

export const Task = ({ task, onCheckboxClick, onDeleteClicl }) => {
    return (
        <span>
            
        </span>)


    const { _id, text, isChecked } = task;

    const handleCheckboxChange = () => {
        onCheckboxClick({ _id, isChecked });
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <span>{text}</span>
        </li>
    );
};
