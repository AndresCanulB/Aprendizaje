import { createBrowserRouter, Navigate } from "react-router";
import { AboutPage } from "../pages/about/AboutPage";
import { LoginPage } from "../pages/auth/LoginPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { PrivateRoute } from "./PrivateRoute";

export const appRouter = createBrowserRouter([
  {
    // En React Router se pueden manejar las rutas con path (ruta) y element (componente que se va a mostrar)
    path: "/",
    element: <AboutPage />
  },
  {
    path: "/profile",
    // element: <ProfilePage />
    element: <PrivateRoute element={<ProfilePage />} />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    // Si el usuario busca una pagina que no existe, se redirige a la pagina principal
    path: "*",

    // Navigate es un componente que permite redirigir a los usuarios
    element: <Navigate to="/" />
  }
]);
