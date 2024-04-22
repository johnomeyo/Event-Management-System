import NavBar from "./NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import "./stylesheet.css";
import Events from "./Pages/Events";
import Details from "./Pages/Details";
import SignUpPage from "./Pages/SignUpPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateEventCard from "./CreateEvent";

function App() {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
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
      </QueryClientProvider>
    </>
  );
}

export default App;
