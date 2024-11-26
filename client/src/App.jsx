import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Homepage";
import ShortUrlRedirect from "./components/ShortUrlRedirect ";
import Toggle from "./components/Toggle";
import ShortUrlStatus from "./components/ShortUrlStatus";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/status/:urlCode" element={<ShortUrlStatus />} />
        <Route path="/:urlCode" element={<ShortUrlRedirect />} />
      </Routes>
      <>
        <Toggle />
      </>
    </div>
  );
}

export default App;
