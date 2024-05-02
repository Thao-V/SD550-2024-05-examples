import { useLocation, useNavigate } from "react-router-dom"

export default function AddProduct(){
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const goBack = () => {
    navigate("/");
  }
  return(
    <div>
      <button onClick={goBack}>Back</button>
      <p>Add New Product</p>
      <p>{location.state.name}</p>
    </div>
  )
}