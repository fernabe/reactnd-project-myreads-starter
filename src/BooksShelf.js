import React from 'react'
import Book from './Book'

const BooksShelf = (props) => {
	const {shelf, books} = props;
  	const booksFiltered = books.filter(book => book.shelf === shelf)
  	
  	return(
      	<div className="bookshelf">
       		<h2 className="bookshelf-title">Currently Reading</h2>
  			<div className="bookshelf-books">
    			<ol className="books-grid">
      				{booksFiltered.map((book) => (
						<Book key={book.id} data={book} />
    				))}
      			</ol>
			</div>
		</div>
   	)
}


export default BooksShelf;