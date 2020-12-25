import React, { useContext, useState } from 'react'
import { BookContext } from './contexts/BookContext'

const BookAdd = () => {
  const {dispatch} = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_BOOK',
      new_book: {
        id: Math.round(Math.random() * 10000000),
        title, author
      }
    }) //dispatch
    setAuthor(""); setTitle("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="title.." required />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="author.." required />
      <button>Add</button>
    </form>
  )
}

export default BookAdd
