import { useParams, useSearchParams } from "react-router-dom"

export default function EditProduct(){
  const params = useParams();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('firstname'));
  return(
    <div>
      <p>Update Product</p>
      <p>{params.id}</p>
      <p>{searchParams.get("firstname")}</p>
    </div>
  )
}