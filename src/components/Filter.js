import React from 'react';

/**
 * Filter (Task Filtering)
 * Allows users to switch between 'All', 'Completed', and 'Pending' views.
 * Updates the filter state in TodoApp.
 */
const Filter = ({ setFilter }) => (
  <div>
    <button onClick={() => setFilter('all')}>All</button>
    <button onClick={() => setFilter('completed')}>Completed</button>
    <button onClick={() => setFilter('pending')}>Pending</button>
  </div>
);

export default Filter;