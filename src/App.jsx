import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./routes/private.routes";
import PublicRoutes from "./routes/public.routes";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("")
    setIsAuthenticated(token)
    if (token) {
      return
    }
  }, [isAuthenticated])

  return (
    <BrowserRouter>
      {isAuthenticated.length > 0 ? (
        <PrivateRoutes />
      ) : (
        <PublicRoutes />
      )}
    </BrowserRouter>
  );
}

export default App;
