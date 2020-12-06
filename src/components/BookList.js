import React,{useContext} from 'react'
import { BookContext } from '../contexts/BookContext'
import Bookdetails from './Bookdetails'

export default function BookList() {
 const {books} = useContext(BookContext)
  return  books.length ? (
    <div className="booklist">
      <ul>{
        books.map(book =>{
          return(<Bookdetails book={book} key={book.id}/>)
        })
        }
        </ul>
    </div>
  ): (
    <div className="empty">Np books available:(</div>
  )
}
