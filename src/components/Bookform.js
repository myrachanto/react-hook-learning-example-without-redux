import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

const Bookform = () =>{
  const { addBook } = useContext(BookContext)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const handlesubmit = (e) =>{
    e.preventDefault();
    addBook(title,author)
    setTitle('')
    setAuthor('')
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder="book title"  value={title}
        onChange={(e) => setTitle(e.target.value)} requird/>
        <input type="text" placeholder="book author"  value={author}
        onChange={(e) => setAuthor(e.target.value)} required/>
        <input type="submit" value="add book"/>
      </form>
    </div>
  )
}

export default Bookform