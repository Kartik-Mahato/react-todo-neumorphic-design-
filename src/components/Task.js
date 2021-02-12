import React, { useContext } from 'react';
import { FaTrashAlt, FaPenAlt } from 'react-icons/fa';
import { TaskListContext } from '../context/TaskListContext';


const Task = ({ task }) => {
    const { removeTask, findItem } = useContext(TaskListContext);
    return (
        <li className="list-item">
            <span>{task.title}</span>
            <div>
                <button className="btn-delete" onClick={() => removeTask(task.id)}>
                    <FaTrashAlt />
                </button>
                <button className="btn-edit" onClick={() => findItem(task.id)}>
                    <FaPenAlt />
                </button>
            </div>
        </li>
    )
}

export default Task
