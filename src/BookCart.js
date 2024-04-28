import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const BookCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const removeFromCart = bookId => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: bookId });
  };

  return (
    <div>
      <ul>
        {cart.map(book => (
          <li key={book.id}>
            {book.name} 
            <button onClick={() => removeFromCart(book.id)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookCart;
