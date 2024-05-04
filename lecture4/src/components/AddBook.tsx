
import { useState } from "react"
import { addBook } from "../helper/api";

export default function AddBook(){
  const [book, setBook] = useState({id: "", title: ""});
  const onchange = (e: any) => {
    const {name, value} = e.target;
    setBook({...book, [name]: value})
  }
  const onAdd = async () =>{
    try {
      const res = await addBook();
    } catch (error) {
      
    }
  }
  return(
    <div>
      <input placeholder="Id" value={book.id} name="id" onChange={onchange}/>
      <button onClick={onAdd}>Add</button>
    </div>
  )
}