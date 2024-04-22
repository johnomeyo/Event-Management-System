// import EventTile from "../EventTile";
// import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


function Events(){
    // let routeToHome = useNavigate();
    const { isPending, error, data } = useQuery({
        queryKey: ["cat facts"],
        queryFn: () =>
          fetch("https://catfact.ninja/fact").then((res) => res.json()),
      });
      if (isPending) return "Loading....";
      if (error) return "An error occured while fetching data";
      return <p>{data.fact}</p>;
}
export default Events