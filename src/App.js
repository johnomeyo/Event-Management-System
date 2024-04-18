import EventTile from "./EventTile";
import "./index.css";
import "./stylesheet.css";

function App() {
  return (
    <>
      {/* <div className="home-page">
        <CreateEventCard />
      </div> */}
      <h1>Events</h1>
      <EventTile />
      <EventTile />
      <EventTile />
      <EventTile />
    </>
  );
}

export default App;
