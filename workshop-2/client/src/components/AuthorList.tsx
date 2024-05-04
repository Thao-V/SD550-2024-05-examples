import { useContext } from "react";
import GlobalContext from "./Context";
import IAuthor from "./IAuthor";
import Author from "./Author";

export default function AuthorList(){
  const {authors} = useContext(GlobalContext);
  return(
    <div>
      <h3>Author List</h3>
      {
        authors.map((author: IAuthor) => <Author key={author.id} data={author}/>)
      }
    </div>
  )
}