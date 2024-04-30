import React from 'react'


export const Task = ({ task }) => {
    return <li> {task._id} {task.text} </li>
}