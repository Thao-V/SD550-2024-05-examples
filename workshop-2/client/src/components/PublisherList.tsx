import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import GlobalContext from "./Context";
import IPublisher from "./IPublisher";
import Publisher from "./Publisher";

export default function PublisherList(){
  const navigate = useNavigate();
  const {publishers} = useContext(GlobalContext);

  const navigateToAddPublisher = () => {
    navigate("/add-publisher");
  }
  return(
    <div>
      <h3>Publisher List</h3>
      {
        publishers.map((publisher: IPublisher) => <Publisher key={publisher.id} data={publisher}/>)
      }
      <button onClick={navigateToAddPublisher}>Add New Publisher</button>
    </div>
  )
}