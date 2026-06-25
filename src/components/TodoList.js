import React from 'react';
import { useSelector } from 'react-redux';
import useFetchTodos from '../hooks/useFetchTodos';

const TodoList = () => {
  useFetchTodos();
  const { items, status, error } = useSelector(state => state.todos);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
      {items.map(todo => (
        <li
          key={todo.id}
          style={{ margin: '0.5rem 0', padding: '0.5rem', borderRadius: '5px', background: '#f5f5f5', transition: 'background 0.2s', cursor: 'pointer' }}
          onMouseOver={e => (e.currentTarget.style.background = '#ffe082')}
          onMouseOut={e => (e.currentTarget.style.background = '#f5f5f5')}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
