import React, { useContext } from 'react'
import BookDetail from './BookDetail';
import { BookContext } from './contexts/BookContext';

const Books = () => {
  const {books} = useContext(BookContext);

  return books.length ? (
    <div className="book-list">
      {
        books.map(book => 
          <BookDetail key={book.id} book={book} />
        )
      }
    </div>
  ) : (
    <div>
      <h3>
        No books.
      </h3>
    </div>
  )
}

export default Books
