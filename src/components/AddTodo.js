import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store';

const AddTodo = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center my-8">
      <input
        className='p-2 w-52 mb-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2">Add Task</button>
    </form>
  );
};

export default AddTodo;
