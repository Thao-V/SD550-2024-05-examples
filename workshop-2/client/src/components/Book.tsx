import { useContext, useState } from "react";
import IAuthor from "./IAuthor";
import IBook from "./IBook";
import GlobalContext from "./Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface BookProps{
  data: IBook
}
export default function Book({data}: BookProps){
  const {authors} = useContext(GlobalContext);
  const [selectedAuthors, setSelectedAuthor] = useState<string[] | undefined>(data.authors);
  const {books, setBooks} = useContext(GlobalContext);
  const navigate = useNavigate();

  const onChange = (e: any) => {
    const authorId = e.target.value;
    if(selectedAuthors?.includes(authorId)){
      const arr = selectedAuthors.filter(x => x !== authorId);
      setSelectedAuthor(arr);
    }else{
      if(selectedAuthors){
        const arr = [...selectedAuthors, authorId];
        setSelectedAuthor(arr);
      }else{
        setSelectedAuthor([authorId]);
      }
    }
  }
  const updateAuthors = async () => {
    try {
      const obj = {...data, authors: selectedAuthors};
      const res = await axios.put(`http://localhost:5000/books/${data.id}`, obj);
      if(res.status === 200){
        alert("The authors are updated successfully.")
      }
    } catch (error) {
      
    }
  }
  
  const navigateToUpdateBook = () => {
    navigate("/update-book", {state: data});
  }
  
  const deleteBook = async () => {
    const deleted = window.confirm('Do you want to delete this book?');
    if(deleted){
      try {
        const res = await axios.delete(`http://localhost:5000/books/${data.id}`);
        if(res.status === 200){
          let arr = books.filter(x => x.id !== data.id);
          setBooks(arr);
        }
      } catch (error) {
        
      }
    }
  }
  const borrowBook = async () => {
    try {
      const book = {...data};
      if(!book.catalog || book.catalog.availableCopies === 0){
        return alert("Cannot borrow this book now.")
      }
      if(book.catalog){
        book.catalog.availableCopies -= 1;
      }
      const res = await axios.put(`http://localhost:5000/books/${book.id}`, book);
      console.log(res, book);
      if(res.status === 200){
        let index = books.findIndex(x => x.id === book.id);
        if(index !== -1){
          books[index] = book;
        }
        setBooks([...books]);
      }
      
    } catch (error) {
      
    }
  }
  return(
    <div style={{borderWidth: 1, borderStyle: "solid", borderColor: "black", margin: 10}}>
      <p>{data.title}</p>
      <p>{data.isbn}</p>
      {
        data.catalog && <p>{data.catalog.availableCopies}</p>
      }
      {
        authors.map((author: IAuthor) => {
        return (
          <div>
            <input type="checkbox" id={author.id} value={author.id} 
              checked={selectedAuthors?.includes(author.id)} 
              onChange={onChange}/>
            <label htmlFor={author.id}>{author.id}</label>
          </div>
          )
        })
      }
      <button onClick={updateAuthors}>Update Authors</button>
      <button onClick={navigateToUpdateBook}>Update Book</button>
      <button onClick={deleteBook}>Delete</button>
      <button onClick={borrowBook}>Borrow</button>
    </div>
  )
}