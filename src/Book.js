import React from 'react'
import BookShelfSelector from './BookShelfSelector'
const Book = (props) => {
  const { book } = props;
 
  return(
  	<li>
    <div className="book">
    	<div className="book-top">
            <div 
    			className="book-cover" 
    			style={{ width: 128, height: 193, 
                	backgroundImage: `url(${
    					book.imageLinks 
                      	? book.imageLinks.thumbnail 
                      	: ''
                  	})`
				}}/>	
				<BookShelfSelector 
					book={book}
					changeBookShelf={props.changeBookShelf}
				/>
		</div>
      	<div className="book-title">{book.title}</div>
     	<div className="book-authors">
        	{book.authors ? book.authors.join(', ') : 'Unknown Author'}
      	</div>
    </div>
  </li>
  )
}

export default Book;