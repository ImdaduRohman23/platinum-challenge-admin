import Dashboard from "./pages/Dashboard";
import Cars from "./pages/Cars";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import ProtectedRoute from "./HOC/ProtectedRoute";
import { useEffect } from "react";
import { useState } from "react";


function App() {
  const [isLogin, setIsLogin] = useState(null);
  console.log(isLogin)

  useEffect(() => {
      const checkIfLogin = () => {
          const token = localStorage.getItem("token");
          if (!token) {
              setIsLogin(false);
          } else {
              setIsLogin(true);
          }};
          checkIfLogin();
      }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/dashboard" element={<ProtectedRoute isLogin={isLogin}>
          <Dashboard />
        </ProtectedRoute>} />

        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/Cars" element={<Cars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
