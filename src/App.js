import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateCard from "./components/CreateCard";
import LandingPage from "./components/LandingPage";
import Share from "./components/Share";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/share" element={<Share />} />
        <Route path="/create-card" element={<CreateCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
