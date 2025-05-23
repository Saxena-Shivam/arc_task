import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import DashBoard from "./pages/Dashboard";
import { useState } from "react";
import RefrshHandler from "./RefrshHandler";
import ChatPage from "./pages/ChatPage";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };
  return (
    <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<DashBoard />} />}
        />
        <Route
          path="/chat/:acceptanceId"
          element={<PrivateRoute element={<ChatPage />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
