import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            element={<Home />}
            path='/'
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
