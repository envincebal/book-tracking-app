import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="bookshelf">
        <div className="currently-reading">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">

          </div>
        </div>
        <div className="want-to-read">
          <h2 className="bookshelf-title">Want To Read</h2>
          <div className="bookshelf-books">

          </div>
        </div>
        <div className="Read">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
