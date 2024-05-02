import { Link, useNavigate, useOutlet } from "react-router-dom"
export default function Home(){
  const outlet = useOutlet();
  const navigate = useNavigate();
  const navigateToAddProduct = () => {
    navigate("/add-product", {state: {name: "Thao"}});
  }
  const navigateToEditProduct = () => {
    navigate("/edit-product/3?firstname=Thao");
  }
  return(
    <div>
      <p>Home Page</p>
      <Link to="/add-product">Add Product</Link>
      <br/>
      <Link to="child">Child</Link>
      {outlet}
      <button onClick={navigateToAddProduct}>Add Product</button>
      <button onClick={navigateToEditProduct}>Edit Product</button>
    </div>
  )
}