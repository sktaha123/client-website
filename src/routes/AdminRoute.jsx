import { Navigate } from "react-router-dom";
import { isAdmin } from "../utils/adminAuth";

export function AdminRoute({ children }) {
  if (!isAdmin()) {
    return <Navigate to="/" replace />;
  }
  return children;
}
