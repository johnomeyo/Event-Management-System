import EventTile from "../EventTile";
import { useNavigate } from "react-router-dom";


function Events(){
    let routeToHome = useNavigate();
    return (
        <>
        <EventTile/>
        <EventTile/>
        <EventTile/>

        <button onClick={()=>routeToHome("/details")}>Go to Details Page</button>
        </>
    );
}
export default Events