import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@/components/ui/button";
import { use } from "react";
import { Link } from "react-router";

export const AboutPage = () => {
  const { isAuthenticated, logout } = use(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font bold">Pagina sobre mi</h1>
      <hr />
      <div className="flex flex-col gap-2">
        {/* En un SPA no se usan las etiquetas <a> de html
        <a href="/profile">Perfil</a>
        <a href="/login">Iniciar sesión</a> 
        */}

        {/* Perfil de usuario si tiene sesion */}
        {/* Link es un componente de react-router que permite navegar entre páginas sin recargar la página */}
        {/* En diseño condicional usar && para un solo caso verdadero */}
        {isAuthenticated && (
          <Link to="/profile" className="hover:text-blue-500 underline text-2xl">
            Perfil
          </Link>
        )}
        {/* En diseño condicional usar operador ternario para manejar un caso verdadero y otro falso */}
        {isAuthenticated ? (
          // Login
          <Button onClick={logout} variant="destructive" className="mt-4">
            Salir
          </Button>
        ) : (
          // Logout
          <Link to="/login" className="hover:text-blue-500 underline text-2xl">
            Iniciar sesión
          </Link>
        )}
      </div>
    </div>
  );
};
