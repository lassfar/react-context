import React, { createContext, useEffect, useReducer } from 'react';
import { bookReducer } from './../reducers/bookReducer';

// #1 create context
export const BookContext = createContext();

// #2 init state (optionnal)
const initialBookState = [
  {id: 1, title: "Dark Knight", author: "Batman"},
  {id: 2, title: "The Rage", author: "Alan"},
  {id: 3, title: "Twilight Saga", author: "Edward"}
];

// #3 create component function with props
const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, initialBookState, () => {
    return localStorage.getItem("books") ? JSON.parse(localStorage.getItem("books")) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books])

  return (
    <BookContext.Provider value={{books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  )

}

export default BookContextProvider