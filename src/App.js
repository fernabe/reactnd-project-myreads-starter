import React from 'react'
import BooksList from './BooksList'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    allBooks: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

	componentDidMount = () => {
   		BooksAPI.getAll()
      	.then(books => {
        	this.setState({ allBooks: books });
     	})
      	.catch(err => {
        	console.log(err);
      	});
    }

  render() {
    return (
      <div className="app">
 		 <BooksList allBooks={this.state.allBooks}/>
     </div>
    )
  }
}

export default BooksApp
