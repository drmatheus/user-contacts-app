import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { ModalProvider } from "../contexts/UserContext";

export function MyRoutes() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <ModalProvider>
            <Home />
          </ModalProvider>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
