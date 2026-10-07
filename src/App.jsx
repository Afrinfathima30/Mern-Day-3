import { BrowserRouter, Routes, Route } from "react-router-dom";

import { JobsProvider } from "./context/JobsContext";

import Dashboard from "./pages/Dashboard";
import Opportunities from "./pages/Opportunities";
import Applications from "./pages/Applications";
import AddOpportunity from "./pages/AddOpportunity";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";

function App() {
  return (
    <JobsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/opportunities"
            element={<Opportunities />}
          />

          <Route
            path="/applications"
            element={<Applications />}
          />

          <Route
            path="/add-opportunity"
            element={<AddOpportunity />}
          />

          <Route
            path="/calendar"
            element={<Calendar />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />
        </Routes>
      </BrowserRouter>
    </JobsProvider>
  );
}

export default App;