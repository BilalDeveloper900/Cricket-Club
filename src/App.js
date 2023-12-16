import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import Home from "./Components/Home";
import Book_Slot from "./Components/Book_Slot";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Book_Slot" element={<Book_Slot />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
