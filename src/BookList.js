import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const BookList = () => {
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState('asc'); // Состояние для хранения порядка сортировки
  const books = useSelector(state => state.books);
  const cart = useSelector(state => state.cart);

  const addToCart = book => {
    dispatch({ type: 'ADD_TO_CART', payload: book });
  };

  // Функция для сортировки книг по имени
  const sortBooks = () => {
    const sortedBooks = [...books].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    return sortedBooks;
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };

  return (
    <div>
      <button onClick={handleSort}>Sort by {sortOrder === 'asc' ? 'desc' : 'asc'}</button>
      <ul>
        {sortBooks().map(book => (
          <li key={book.id}>
            {book.name}
            {/* Деактивируем кнопку, если книга уже в корзине */}
            <button
              onClick={() => addToCart(book)}
              disabled={cart.some(item => item.id === book.id)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
