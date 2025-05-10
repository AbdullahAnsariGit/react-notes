// src/App.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';  // If you have custom CSS for the loader
import { fetchData } from './store/dataSlice';

function App() {
  const dispatch = useDispatch();
  const { items, status, error, isLoading } = useSelector((state) => state.data);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  
  }, [status, dispatch]);

  return (
    <div className="App">
      <h1>API Data</h1>

      {/* Conditionally render the loader based on Redux's isLoading */}
      {isLoading && (
        <div className="loader"></div> // Show loader when isLoading is true
      )}

      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
