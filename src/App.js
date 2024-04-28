import React from 'react';
import BookList from './BookList';
import BookCart from './BookCart';

function App() {
  return (
    <div>
      <h1>Book list</h1>
      <BookList />
      <h1>Cart</h1>
      <BookCart />
    </div>
  );
}

export default App;
