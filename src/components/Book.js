import React from "react";

const Book = (props) => {
  return (
    <div className="book">
      <div className="book-cover">
        <img src="" alt="" />
      </div>
      <div className="book-menu">
        <select>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
      <p className="book-title"></p>
      <p className="book-author"></p>
    </div>
  );
}

export default Book;