import React from 'react';
import { Link } from 'react-router-dom';

function AdminHome() {
  return (
    <div>
      <h1>Welcome to Bookshelf Admin Panel</h1>
      <Link to="/add-book">Add Book</Link>
      <br />
      <Link to="/show-books">Show Books</Link>
    </div>
  );
}

export default AdminHome;
