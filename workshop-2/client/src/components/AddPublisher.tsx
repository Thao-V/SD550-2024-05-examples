import { useState } from "react";
import IPublisher from "./IPublisher"
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function AddPublisher(){
  const [publisher, setPublisher] = useState<IPublisher>({id: "", name: "", email: "", phone: "", address: ""});
  const onChange = (e: any) => {
    const {name, value} = e.target;
    setPublisher({...publisher, [name]: value})
  }
  const navigate = useNavigate();
  const onAddPublisher = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/publishers`, publisher);
      if(res.status === 201){
        navigate("/publishers");
      }
    } catch (error) {
      
    }
  }
  return(
    <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center"}}>
      <h3>Add Publisher</h3>
      <input placeholder="Id" value={publisher.id} name="id" onChange={onChange}/>
      <input placeholder="name" value={publisher.name} name="name" onChange={onChange}/>
      <input placeholder="email" value={publisher.email} name="email" onChange={onChange}/>
      <input placeholder="phone" value={publisher.phone} name="phone" onChange={onChange}/>
      <input placeholder="address" value={publisher.address} name="address" onChange={onChange}/>
      <button onClick={onAddPublisher}>Add</button>
    </div>
  )
}