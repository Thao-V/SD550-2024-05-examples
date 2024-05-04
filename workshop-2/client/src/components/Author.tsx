import IAuthor from "./IAuthor";

interface AuthorProps{
  data: IAuthor
}
export default function Author({data}: AuthorProps){
  return(
    <div>
      <p>{data.firstname}</p>
    </div>
  )
}