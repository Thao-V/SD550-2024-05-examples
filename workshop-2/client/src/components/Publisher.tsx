import IPublisher from "./IPublisher";

interface PublisherProps{
  data: IPublisher;
}
export default function Publisher({data}: PublisherProps){
  return(
    <div style={{borderWidth: 1, borderStyle: "solid", borderColor: "black", margin: 10}}>
      <p>{data.name}</p>
    </div>
  )
}