import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from '../store';

const useFetchTodos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const promise = dispatch(fetchTodos());
    return () => {
      // Cleanup: abort fetch if needed (not required for fetch, but good practice)
      if (promise.abort) promise.abort();
    };
  }, [dispatch]);
};

export default useFetchTodos;
