import { useContext, useState } from "react"
import IBook from "./IBook"
import axios from "axios";
import GlobalContext from "./Context";
import { useNavigate } from "react-router-dom";

export default function AddBook(){
  const [book, setBook] = useState<IBook>({id: "", title: "", isbn: "", genre: "", format: "paper", authors: [], summary:"", catalog: {numOfCopies: 0, availableCopies: 0}});
  const onChange = (e: any) => {
    const {name, value} = e.target;
    setBook({...book, [name]: value});
  }
  const {books, setBooks} = useContext(GlobalContext);
  const onAdd = async () => {
    try {
      const res = await axios.post("http://localhost:5000/books", book);
      if(res.status === 201){
        setBooks([...books, res.data]);
        navigate("/books");
      }
    } catch (error) {
      
    }
  }
  const navigate = useNavigate();
  const gotoBookList = () => {
    navigate("/books");
  }
  const onChangeCatalog = (e: any) => {
    const {name, value} = e.target;
    let catalog: any = {...book.catalog, [name]: parseInt(value)};
    setBook({...book, catalog});
  }
  return(
    <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center"}}>
      <h3>Add New Book</h3>
      <input placeholder="Id" name="id" value={book.id} onChange={onChange}/>
      <input placeholder="Title" name="title" value={book.title} onChange={onChange}/>
      <input placeholder="isbn" name="isbn" value={book.isbn} onChange={onChange}/>
      <input placeholder="Genre" name="genre" value={book.genre} onChange={onChange}/>
      <input placeholder="Summary" name="summary" value={book.summary} onChange={onChange}/>
      <input placeholder="Number Of Copies" name="numOfCopies" value={book.catalog?.numOfCopies} onChange={onChangeCatalog}/>
      <input placeholder="Available Copies" name="availableCopies" value={book.catalog?.availableCopies} onChange={onChangeCatalog}/>
      <button onClick={onAdd}>Add</button>
      <button onClick={gotoBookList}>Book List</button>
    </div>
  )
}