import './App.css';
import { useState } from 'react';

function App() {
  // This originally called the libraryThing api, but they'ce since
  // shut it down; Just using static data now
  const [books] = useState([
    { title: 'Hyperion', author: 'Dan Simmons', cover: 'cover_1.jpg' },
    { title: 'The Graveyard Book', author: 'Neil Gaiman', cover: 'cover_2.jpg' },
    { title: 'Shards of Earth', author: 'Adrian Tchaikovsky', cover: 'cover_3.jpg' },
    { title: 'The Color of Magic', author: 'Terry Pratchett', cover: 'cover_4.jpg'},
    { title: 'The Stone Sky', author: 'N. K. Jemison', cover: 'cover_5.jpg' },
    { title: 'Leviathan Wakes', author: 'James S.A. Corey', cover: 'cover_6.jpg' },
    { title: 'The Way of Kings', author: 'Brandon Sanderson', cover: 'cover_7.png' },
    { title: 'The Blade Itself', author: 'Joe Abercrombie', cover: 'cover_8.jpg' },
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
