import NavBar from "./NavBar";
import "./index.css";
import "./stylesheet.css";
import Events from "./Pages/Events";
import Details from "./Pages/Details";
import SignUpPage from "./Pages/SignUpPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateEventCard from "./CreateEvent";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/create" element={<CreateEventCard />} />
          <Route path="/details/:event_name" element={<Details />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
