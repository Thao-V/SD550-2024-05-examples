import { Link } from "react-router-dom";

export default function Home(){
  return(
    <div style={{display: "flex", flexDirection: "column"}}>
      <Link to="/books">Book List</Link>
      <Link to="/publishers">Publisher List</Link>
    </div>
  )
}