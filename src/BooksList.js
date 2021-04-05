import React, {Component} from 'react'
import BooksShelf from "./BooksShelf"


const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];

class BooksList extends Component{
 
  render() {
    return(
      <div className="list-books">
          	<div className="list-books-title">
            	<h1>MyReads</h1>
          	</div>
       		<div className="list-books-content">
          		<div>
      				{ bookshelves.map(shelf =>(
						<BooksShelf key={shelf.key} shelf={shelf.key} books={this.props.allBooks}/>
      				))}
      			</div>
      		</div>
       </div>
    )
  }
	
}

export default BooksList;