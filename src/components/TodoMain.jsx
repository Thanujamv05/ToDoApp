import React, { useReducer, useEffect, useState } from 'react';
import { useTodo } from '../context/TodoContext';
import { todoReducer } from '../reducers/TodoReducers';
import TaskInput from './TaskInput';
import TaskDisplay from './TaskDisplay';
import DueDateModal from './DueDateModal';


function TodoMain({ dark }) {
    const data = useTodo();
    const [tasks, dispatch] = useReducer(todoReducer, data);

    const [overdueTasks, setOverdueTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        const overdue = tasks.filter(task => task.dueDate && task.dueDate < today);
        if (overdue.length > 0) {
            setOverdueTasks(overdue);
            setShowModal(true);
        }
    }, [tasks]);
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(tasks));
      }, [tasks]);

    return (
        <div style={{ backgroundColor: dark ? "black" : "white" }}>
            <TaskInput dispatch={dispatch} dark={dark} />
            <TaskDisplay tasks={tasks} dispatch={dispatch} dark={dark} />
            {showModal && (
                <DueDateModal
                    overdueTasks={overdueTasks}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
}

export default TodoMain;

