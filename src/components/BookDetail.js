import React, { useContext } from 'react'
import { BookContext } from './contexts/BookContext';

const BookDetail = ({book}) => {
  const {dispatch} = useContext(BookContext);
  
  return (
    <h3 className="book" onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
      {book.title+", by "+book.author}
    </h3>
  )
}

export default BookDetail
