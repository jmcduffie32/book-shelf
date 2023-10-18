import './App.css';
import { useState } from 'react';

function App() {
  // This originally called the libraryThing api, but they'ce since
  // shut it down; Just using static data now
  const [books] = useState([
    { title: 'Hyperion', author: 'Dan Simmons', cover: 'https://openlibrary.org/works/OL1963268W?edition=key%3A/books/OL24961127M' },
    { title: 'The Graveyard Book', author: 'Neil Gaiman', cover: 'https://openlibrary.org/works/OL679348W?edition=key%3A/books/OL19429647M' },
    { title: 'Shards of Earth', author: 'Adrian Tchaikovsky', cover: 'https://openlibrary.org/works/OL24481122W?edition=key%3A/books/OL37485654M' },
    { title: 'The Color of Magic', author: 'Terry Pratchett', cover: 'https://books.google.com/books?id=7YBX8sWHq4sC&dq=The+color+of+magic&hl=en&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwj8rJjQsP6BAxVHmIkEHRubBegQ6wF6BAgGEAE'},
    { title: 'The Stone Sky', author: 'N. K. Jemison', cover: 'https://books.google.com/books?id=cmWnDQAAQBAJ&printsec=frontcover&dq=the+stone+sky&hl=en&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwjNq4nDsP6BAxU3jIkEHYGQBfYQ6wF6BAgGEAE' },
    { title: 'Leviathan Wakes', author: 'James S.A. Corey', cover: 'https://books.google.com/books?id=yud-foXqGUEC&printsec=frontcover&dq=leviathan+wakes&hl=en&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwii0M7hsP6BAxVSkYkEHVJ-AcMQ6wF6BAgKEAE' },
    { title: 'The Way of Kings', author: 'Brandon Sanderson', cover: 'https://books.google.com/books?id=LN_a49HEpmwC&printsec=frontcover&dq=the+way+of+kings&hl=en&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwiq0-znsP6BAxUBjokEHTAiD7oQ6wF6BAgKEAE' },
    { title: 'The Blade Itself', author: 'Joe Abercrombie', cover: 'https://books.google.com/books?id=SlizBgAAQBAJ&printsec=frontcover&dq=the+blade+itself&hl=en&newbks=1&newbks_redir=1&sa=X&ved=2ahUKEwiX59rxsP6BAxVtnokEHZo0CkwQ6wF6BAgJEAE' },
  ]);

  // useEffect(() => {
  //   fetch(`https://www.librarything.com/api_getdata.php?userid=${userId}&key=${apiKey}&responseType=json`)
  //   .then((resp) => resp.json())
  //   .then(data => {
  //     if (data.books) {
  //       setBooks(Object.values(data.books));
  //     }
  //   });

  // }, []);

  return (
    <div className="App">
      <header className="h-auto p-3 bg-gray-800 text-white">
        <h1 className="text-center text-2xl">Book Shelf</h1>
      </header>
      <main className="container px-6 bg-gray-100 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {books.map(book => <Book book={book} />)}
        </div>
      </main>
    </div>
  );
}

function Book({book}) {
  return (
    <div className="p-6 min-w-full max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 transition duration-300 transform motion-safe:hover:scale-105">
      <div className="flex-shrink-0">
        <img src={book.cover} alt="book cover" className="h-12 w-12"/>
      </div>
      <div>
        <div className="text-xl font-medium text-black">{book.title}</div>
        <p className="text-gray-500">{book.author}</p>
      </div>

    </div>
  )

}

export default App;
