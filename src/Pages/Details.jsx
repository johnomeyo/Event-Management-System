import { useParams } from "react-router-dom";
function Details(){
    let {event_name} = useParams()
return (
    <p>This is the details page for {event_name}</p>
);
}
export default Details;