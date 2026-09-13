import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";
import { UserContextProvider } from "./context/UserContext";

const ProfessionalApp = () => {
  return (
    <UserContextProvider>
      <div className="bg-gradient">
        <RouterProvider router={appRouter} />
      </div>
    </UserContextProvider>
  );
};

export default ProfessionalApp;

/*

¿Qué es React Router?

React Router es un enrutador multi-estrategia para React. 

Permite manejar la navegación de tu aplicación, es decir, mostrar diferentes componentes/páginas según la URL del navegador, sin recargar la página (SPA - Single Page Application).

Los 3 Modos de React Router

Las funcionalidades son aditivas: Declarative → Data → Framework. 

Cada modo añade más funcionalidades, pero a cambio pierdes algo de control sobre la arquitectura.

1. 🟢 Declarative (el más simple)

El modo clásico. Solo te da lo básico: matching de URLs a componentes y navegación.

import { BrowserRouter } from "react-router";

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

Te da acceso a:

    - <Link>, <NavLink> — para navegar

    - useNavigate, useLocation, useParams — hooks básicos

    - <Routes> y <Route> — para definir rutas en JSX

Ideal para: Apps donde tú manejas la carga de datos por tu cuenta (con useEffect, React Query, etc.).

2. 🟡 Data (intermedio)

Mueve la configuración de rutas fuera del JSX a objetos JavaScript. 

Esto le permite a React Router gestionar la carga de datos y acciones por ti.

import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    loader: loadRootData, // ← carga datos antes de renderizar
  },
]);

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

Te da acceso a (además de todo lo de Declarative):

    - loader — carga datos antes de renderizar la ruta
    
    - action — maneja envíos de formularios y mutaciones
    
    - useFetcher — para interacciones sin navegación
    
    - Pending UI — estados de carga automáticos

Ideal para: Apps SPA más complejas donde quieres carga de datos integrada con el routing.

3. 🔴 Framework (el más completo)

Envuelve Data Mode con un plugin de Vite. 

Es la experiencia completa, similar a lo que era Remix.

import { index, route } from "@react-router/dev/routes";

export default [
  index("./home.tsx"),
  route("products/:pid", "./product.tsx"),
];

Te da acceso a (además de todo lo anterior):

    - href type-safe
    
    - Route Module API con tipos automáticos
    
    - Code splitting inteligente
    
    - SSR (Server Side Rendering), SPA, y SSG (Static Site Generation)

Ideal para: Apps full-stack con SSR, donde quieres que React Router controle toda la arquitectura.

*/
