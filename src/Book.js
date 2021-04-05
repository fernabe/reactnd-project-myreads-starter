import React from 'react'

const Book = (props) => {
  const {data} = props;
  console.log(data.id)
  return(
  	<li>
    <div className="book">
    	<div className="book-top">
            <div 
    			className="book-cover" 
    			style={{ width: 128, height: 193, 
    			backgroundImage:`url(${data.imageLinks.thumbnail})`}}/>
		</div>
      	<div className="book-title">{data.title}</div>
     	<div className="book-authors">
        	{data.authors ? data.authors.join(', ') : 'Unknown Author'}
      	</div>
    </div>
  </li>
  )
}

export default Book;