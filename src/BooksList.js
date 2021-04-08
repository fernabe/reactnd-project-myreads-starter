import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BooksShelf from './BooksShelf';


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
						<BooksShelf 
      						key={shelf.key} 
  							shelf={shelf} 
							books={this.props.allBooks} 
							changeBookShelf={this.props.changeBookShelf}
						/>
      				))}
      			</div>
      		</div>
            <div className="open-search">
            	<Link to="/search">Add a book</Link>
            </div>
       </div>
    )
  }
	
}

export default BooksList;