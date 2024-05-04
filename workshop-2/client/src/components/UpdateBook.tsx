import { useContext, useState } from "react";
import IBook from "./IBook";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import GlobalContext from "./Context";

export default function UpdateBook(){
  const location = useLocation();
  const [book, setBook] = useState<IBook>(location.state);
  const navigate = useNavigate();
  const onChange = (e: any) => {
    const {name, value} = e.target;
    setBook({...book, [name]: value});
  }
  const onChangeCatalog = (e: any) => {
    const {name, value} = e.target;
    let catalog: any = {...book.catalog, [name]: parseInt(value)};
    setBook({...book, catalog});
  }
  const {books, setBooks} = useContext(GlobalContext);
  const onUpdate = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/books/${book.id}`, book);
      if(res.status === 200){
        const index = books.findIndex(x => x.id === book.id);
        if(index !== -1){
          books[index] = res.data;
        }
        setBooks([...books]);
        navigate("/books");
      }
    } catch (error) {
      
    }
  }
  return(
    <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center"}}>
      <h3>Update Book</h3>
      <input placeholder="Id" name="id" value={book.id} onChange={onChange} disabled/>
      <input placeholder="Title" name="title" value={book.title} onChange={onChange}/>
      <input placeholder="isbn" name="isbn" value={book.isbn} onChange={onChange}/>
      <input placeholder="Genre" name="genre" value={book.genre} onChange={onChange}/>
      <input placeholder="Summary" name="summary" value={book.summary} onChange={onChange}/>
      <input placeholder="Number Of Copies" name="numOfCopies" value={book.catalog?.numOfCopies} onChange={onChangeCatalog}/>
      <input placeholder="Available Copies" name="availableCopies" value={book.catalog?.availableCopies} onChange={onChangeCatalog}/>
      <button onClick={onUpdate}>Update</button>
    </div>
  )
}