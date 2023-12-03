// Import necessary libraries
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import components
import AdminHome from './components/AdminHome';
import AddBook from './components/AddBook';
import ShowBooks from './components/ShowBooks';

// App component
function App() {
  return (
    <Router>
      <h1>Welcome to Bookshelf Admin Panel</h1>
      <Switch>
        <Route path="/" exact component={AdminHome} />
        <Route path="/add-book" component={AddBook} />
        <Route path="/show-books" component={ShowBooks} />
      </Switch>
    </Router>
  );
}

export default App;
