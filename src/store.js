import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, name: 'ABC' },
    { id: 2, name: '1984' },
    { id: 3, name: 'Learn JS in two days' },
    { id: 4, name: 'How books lie' }
  ],
  cart: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const bookToAdd = action.payload;
      // Проверяем, есть ли книга уже в корзине
      const isBookInCart = state.cart.some(book => book.id === bookToAdd.id);
      // Если книги нет в корзине, добавляем её
      if (!isBookInCart) {
        return {
          ...state,
          cart: [...state.cart, bookToAdd]
        };
      }
      // Если книга уже в корзине, ничего не делаем
      return state;
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(book => book.id !== action.payload)
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
