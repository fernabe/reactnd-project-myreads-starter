import React, {Component} from "react";
import {Link} from "react-router-dom";
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class Search extends Component{
	state= {
    	filteredBooks: []
    }

	searchBooks = (e) => {
    	
      	const query = e.target.value;
   
      	if(query.length > 0){
        	BooksAPI.search(query).then(books => {
              	console.log(books)
        		if(books.error){
                	this.setState({filteredBooks: []})
                } else {
                  	 books.map(book => (this.props.booksWithShelf.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
                	this.setState({filteredBooks: books})
                }
      		})
        } else {
        	this.setState({filteredBooks: []})
        }
    }

  render(){
  	return(
      <div className="search-books">
            <div className="search-books-bar">
      			<Link to="/" className="close-search">Close</Link>
             
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={this.searchBooks}/>

              </div>
            </div>
            <div className="search-books-results">
              	<ol className="books-grid">
					{this.state.filteredBooks.map((book,i) => (
						<Book 
                      		key={book.id} 
							book={book} 
							changeBookShelf={this.props.changeBookShelf}
						/>
    				))}
				</ol>
            </div>
          </div>)
  }

}

export default Search;