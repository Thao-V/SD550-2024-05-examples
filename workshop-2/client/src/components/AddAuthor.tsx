import { useContext, useState } from "react";
import IAuthor from "./IAuthor";
import axios from "axios";
import GlobalContext from "./Context";

export default function AddAuthor(){
  const [author, setAuthor] = useState<IAuthor>({id: "", firstname: "", lastname: "", phone: "", email: "", address: ""});
  const onChange = (e: any) => {
    const {name, value} = e.target;
    setAuthor({...author, [name]: value})
  }
  const {authors, setAuthors} = useContext(GlobalContext);

  const onSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/authors", author);
      if(res.status === 201){
        setAuthors([...authors, res.data]);
      }
    } catch (error) {
      
    }
  }
  return(
    <div>
      <h3>Add New Author</h3>
      <input placeholder="Id" name="id" value={author.id} onChange={onChange}/>
      <input placeholder="First Name" name="firstname" value={author.firstname} onChange={onChange}/>
      <input placeholder="Last Name" name="lastname" value={author.lastname} onChange={onChange}/>
      <input placeholder="Phone" name="phone" value={author.phone} onChange={onChange}/>
      <input placeholder="Email" name="email" value={author.email} onChange={onChange}/>
      <input placeholder="Address" name="address" value={author.address} onChange={onChange}/>
      <button onClick={onSubmit}>Add</button>
    </div>
  )
}