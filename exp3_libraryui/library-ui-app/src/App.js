import { useState } from "react";
import "./App.css";

function App() {

  const [books, setBooks] = useState([
    { id: 1, title: "Java Programming", author: "James Gosling", issued: false },
    { id: 2, title: "Python Basics", author: "Guido van Rossum", issued: false }
  ]);

  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const addBook = () => {
    if (title === "" || author === "") {
      alert("Fill all fields");
      return;
    }

    const newBook = {
      id: Date.now(),
      title: title,
      author: author,
      issued: false
    };

    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const issueBook = (id) => {
    setBooks(
      books.map(book =>
        book.id === id
          ? { ...book, issued: !book.issued }
          : book
      )
    );
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? "container dark" : "container"}>

      <div className="header">
        <h1>Library Management System</h1>

        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
        </button>
      </div>

      <input
        type="text"
        placeholder="Search book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="book-list">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">

            <h3>{book.title}</h3>
            <p>{book.author}</p>

            <p className={book.issued ? "issued" : "available"}>
              {book.issued ? "Issued" : "Available"}
            </p>

            <button onClick={() => issueBook(book.id)}>
              {book.issued ? "Return" : "Issue"}
            </button>

            <button onClick={() => removeBook(book.id)}>
              Remove
            </button>

          </div>
        ))}
      </div>

      <div className="form">

        <h2>Add New Book</h2>

        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button onClick={addBook}>
          Add Book
        </button>

      </div>

    </div>
  );
}

export default App;
