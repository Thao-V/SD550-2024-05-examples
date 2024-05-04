import { useEffect, useState } from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import GlobalContext from "./components/Context";
import IBook from "./components/IBook";
import BookList from "./components/BookList";
import axios from "axios";
import AddAuthor from "./components/AddAuthor";
import IAuthor from "./components/IAuthor";
import AuthorList from "./components/AuthorList";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import UpdateBook from "./components/UpdateBook";
import Home from "./components/Home";
import PublisherList from "./components/PublisherList";
import AddPublisher from './components/AddPublisher';
import IPublisher from "./components/IPublisher";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/books",
    element: <BookList/> 
  },
  {
    path:"/add-book",
    element: <AddBook/>
  },
  {
    path: "/update-book",
    element: <UpdateBook/>
  },
  {
    path: "/authors",
    element: <AuthorList/>
  },
  {
    path: "/add-author",
    element: <AddAuthor/>
  },
  {
    path: "/publishers",
    element: <PublisherList/>
  },
  {
    path: "/add-publisher",
    element: <AddPublisher/>
  },
  {
    path: "*",
    element: <p>Path Not Found</p>
  }
])

function App() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [authors, setAuthors] = useState<IAuthor[]>([]);
  const [publishers, setPublishers] = useState<IPublisher[]>([])
  const loadBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/books");
      if (res.status === 200) {
        setBooks(res.data);
      }
    } catch (error) {}
  };
  const loadAuthors = async () => {
    try {
      const res = await axios.get("http://localhost:5000/authors");
      if (res.status === 200) {
        setAuthors(res.data);
      }
    } catch (error) {}
  };
  const loadPublishers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/publishers");
      if (res.status === 200) {
        setPublishers(res.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    loadBooks();
    loadAuthors();
    loadPublishers();
  }, []);
  return (
    <GlobalContext.Provider value={{ books, setBooks, authors, setAuthors, publishers, setPublishers }}>
      <RouterProvider router={router}/>
    </GlobalContext.Provider>
  );
}

export default App;
