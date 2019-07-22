import React, { Component } from 'react';
import Header from './components/Header';

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchPage: false
    }
  }
  render() {
    const { showSearchPage } = this.state;
    return (
      <div className="App">

        {showSearchPage ? (
          <div className="search-books">
            <div className="search-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}><i className="fas fa-arrow-left"></i></button>
              <input type="text" placeholder="Search by title or author" />
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
            <div className="list-books">
              <Header />
              <div className="bookshelf">

                <div className="currently-reading">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
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
                      </li>
                      <li>
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
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="want-to-read">
                  <h2 className="bookshelf-title">Want To Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
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
                      </li>
                      <li>
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
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="Read">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
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
                      </li>
                      <li>
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
                      </li>
                      <li>
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
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>+</button>
              </div>
            </div>
          )}
      </div>
    );
  }

}

export default BooksApp;
