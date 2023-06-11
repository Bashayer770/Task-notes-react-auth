import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notes from "./pages/Notes";
import Note from "./pages/Note";
import Users from "./pages/Users";
import { useEffect, useState } from "react";
import { checkToken } from "./api/auth";
import UserContext from "./context/UserContext";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => setUser(checkToken()));
  return (
    <div className="App font-mono ">
      <Navbar />
      <UserContext.Provider value={[user, setUser]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:noteId" element={<Note />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
