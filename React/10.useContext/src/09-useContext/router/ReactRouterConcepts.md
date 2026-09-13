# Guía Completa de Conceptos de React Router

---

## 🟢 Modo Declarative — Conceptos Básicos

---

### `<Link>`

Reemplaza la etiqueta `<a>` de HTML. Navega a otra ruta **sin recargar la página** (mantiene el estado de la SPA).

```tsx
import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/about">Acerca de</Link>
      <Link to="/profile/42">Perfil del usuario 42</Link>
    </nav>
  );
}
```

> [!IMPORTANT]
> Si usas `<a href="/about">`, el navegador **recarga toda la página**. Con `<Link to="/about">`, React Router intercepta el click y solo actualiza el componente que corresponde.

---

### `<NavLink>`

Es igual que `<Link>`, pero **sabe si la ruta está activa** o no. Perfecto para menús de navegación donde quieres resaltar la página actual.

```tsx
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : "text-gray-500"
        }
      >
        Inicio
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive, isPending }) => ({
          color: isActive ? "blue" : isPending ? "gray" : "black",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Acerca de
      </NavLink>
    </nav>
  );
}
```

| Propiedad   | Descripción                                |
|-------------|--------------------------------------------|
| `isActive`  | `true` cuando la URL coincide con el `to`  |
| `isPending` | `true` mientras la navegación está en curso |

---

### `useNavigate`

Hook para **navegar programáticamente** (sin que el usuario haga click en un Link).

```tsx
import { useNavigate } from "react-router";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await loginUser();
    if (success) {
      navigate("/dashboard");       // Ir a dashboard
      // navigate("/dashboard", { replace: true }); // Reemplaza en historial (no puede volver atrás)
      // navigate(-1);              // Ir atrás (como el botón ←)
      // navigate(1);               // Ir adelante (como el botón →)
    }
  };

  return <button onClick={handleLogin}>Iniciar Sesión</button>;
}
```

**Casos de uso:** redirigir después de login, después de enviar un formulario, después de eliminar algo, etc.

---

### `useLocation`

Hook que te da **información sobre la URL actual**. No navega, solo lee.

```tsx
import { useLocation } from "react-router";

function DebugBar() {
  const location = useLocation();

  console.log(location);
  // {
  //   pathname: "/products/42",    ← la ruta
  //   search: "?color=red",        ← query string
  //   hash: "#details",            ← el hash (#)
  //   state: { from: "home" },     ← estado invisible en la URL
  //   key: "abc123"                ← identificador único
  // }

  return <p>Estás en: {location.pathname}</p>;
}
```

**Casos de uso:** mostrar breadcrumbs, analytics, lógica condicional basada en la ruta actual.

---

### `useParams`

Hook para leer los **parámetros dinámicos** de la URL (los que defines con `:` en la ruta).

```tsx
// Si la ruta es: "/products/:productId"
// Y la URL es:  "/products/42"

import { useParams } from "react-router";

function ProductPage() {
  const { productId } = useParams();
  // productId === "42" (siempre es string)

  return <h1>Producto #{productId}</h1>;
}
```

---

### `<Routes>` y `<Route>`

Los componentes que **definen qué componente se muestra para cada URL**. Son el corazón del modo Declarative.

```tsx
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      {/* Ruta exacta "/" */}
      <Route path="/" element={<HomePage />} />

      {/* Ruta con parámetro dinámico */}
      <Route path="/products/:id" element={<ProductPage />} />

      {/* Rutas anidadas (nested routes) */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />      {/* /dashboard */}
        <Route path="stats" element={<Stats />} />        {/* /dashboard/stats */}
        <Route path="settings" element={<Settings />} />  {/* /dashboard/settings */}
      </Route>

      {/* Ruta comodín - 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
```

> [!NOTE]
> En las **rutas anidadas**, el componente padre (`DashboardLayout`) debe usar `<Outlet />` para indicar dónde se renderizan los hijos:
> ```tsx
> import { Outlet } from "react-router";
> 
> function DashboardLayout() {
>   return (
>     <div>
>       <Sidebar />
>       <Outlet />  {/* Aquí aparece DashboardHome, Stats, o Settings */}
>     </div>
>   );
> }
> ```

---

## 🟡 Modo Data — Carga de Datos y Acciones

---

### `loader`

Función que **carga datos ANTES de renderizar** la ruta. React Router la ejecuta automáticamente cuando el usuario navega a esa ruta.

```tsx
import { createBrowserRouter, useLoaderData } from "react-router";

// 1. Defines el loader
async function productsLoader() {
  const response = await fetch("/api/products");
  const products = await response.json();
  return products; // Lo que retornes, llega al componente
}

// 2. Lo asocias a la ruta
const router = createBrowserRouter([
  {
    path: "/products",
    element: <ProductsPage />,
    loader: productsLoader,  // ← Se ejecuta ANTES de renderizar
  },
]);

// 3. Accedes a los datos en el componente
function ProductsPage() {
  const products = useLoaderData(); // ← Los datos del loader

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}
```

**Ventaja vs `useEffect`:** No hay estado de "cargando..." dentro del componente. Los datos ya están listos cuando el componente se renderiza.

---

### `action`

Función que **maneja mutaciones** (crear, actualizar, eliminar). Se ejecuta cuando envías un formulario con `<Form>`.

```tsx
import { createBrowserRouter, Form, redirect } from "react-router";

// 1. Defines la action
async function createProductAction({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const price = formData.get("price");

  await fetch("/api/products", {
    method: "POST",
    body: JSON.stringify({ name, price }),
  });

  return redirect("/products"); // ← Redirige después de crear
}

// 2. Lo asocias a la ruta
const router = createBrowserRouter([
  {
    path: "/products/new",
    element: <NewProductPage />,
    action: createProductAction,  // ← Se ejecuta al enviar el Form
  },
]);

// 3. Usas <Form> en vez de <form>
function NewProductPage() {
  return (
    <Form method="post">
      <input name="name" placeholder="Nombre" />
      <input name="price" type="number" placeholder="Precio" />
      <button type="submit">Crear Producto</button>
    </Form>
  );
}
```

> [!TIP]
> Después de que una `action` se ejecuta, React Router **re-ejecuta automáticamente todos los `loaders`** de las rutas activas. Esto mantiene los datos siempre sincronizados sin que tengas que hacerlo manualmente.

---

### `useFetcher`

Hook para hacer **operaciones de datos SIN navegar**. Perfecto para botones de like, agregar al carrito, formularios inline, etc.

```tsx
import { useFetcher } from "react-router";

function LikeButton({ postId }) {
  const fetcher = useFetcher();
  const isLiking = fetcher.state === "submitting";

  return (
    <fetcher.Form method="post" action={`/posts/${postId}/like`}>
      <button disabled={isLiking}>
        {isLiking ? "❤️ Dando like..." : "🤍 Like"}
      </button>
    </fetcher.Form>
  );
}
```

| `fetcher.state` | Significado |
|---|---|
| `"idle"` | Sin actividad |
| `"submitting"` | Enviando datos (action) |
| `"loading"` | Cargando datos después de la action |

**Diferencia con `useNavigate`:** `useNavigate` cambia la URL. `useFetcher` hace la operación pero **te quedas en la misma página**.

---

### Pending UI

No es un API específico, sino un **patrón** para mostrar indicadores de carga durante la navegación. React Router te da las herramientas:

```tsx
import { useNavigation } from "react-router";

function GlobalSpinner() {
  const navigation = useNavigation();

  // navigation.state puede ser:
  // "idle"       → nada está pasando
  // "loading"    → un loader se está ejecutando
  // "submitting" → una action se está ejecutando

  if (navigation.state === "loading") {
    return <div className="spinner">Cargando...</div>;
  }

  return null;
}
```

También funciona a nivel de `<NavLink>`:

```tsx
<NavLink
  to="/dashboard"
  className={({ isPending }) =>
    isPending ? "opacity-50" : ""
  }
>
  Dashboard
</NavLink>
```

---

## 🔴 Modo Framework — Funcionalidades Avanzadas

---

### `href` type-safe

En Framework Mode, cuando escribes un `<Link>`, TypeScript **autocompleta y valida las rutas**. No puedes escribir una ruta que no existe.

```tsx
// ✅ TypeScript te autocompleta las rutas válidas
<Link to="/products/42">Ver producto</Link>

// ❌ Error de TypeScript: "/prodcts" no existe
<Link to="/prodcts">Ver producto</Link>
```

Esto evita errores por typos en las rutas que solo descubrirías en runtime.

---

### Route Module API con tipos automáticos

Cada archivo de ruta exporta funciones con **tipos generados automáticamente** por React Router. No necesitas definir tipos manualmente.

```tsx
// product.tsx (archivo de ruta)
import type { Route } from "./+types/product"; // ← tipos auto-generados

// params.pid está tipado como string automáticamente
export async function loader({ params }: Route.LoaderArgs) {
  const product = await getProduct(params.pid);
  return { product };
}

// loaderData está tipado con lo que retorna el loader
export default function Product({ loaderData }: Route.ComponentProps) {
  return <h1>{loaderData.product.name}</h1>;
  //                      ^^^^^^^^ TypeScript sabe que esto existe
}
```

---

### Code Splitting inteligente

React Router **divide automáticamente tu código** por rutas. El navegador solo descarga el JavaScript de la página que el usuario está visitando.

```
Sin code splitting:
  bundle.js → 500KB (todo el código de todas las páginas)

Con code splitting (Framework Mode):
  home.js     → 50KB  ← solo se carga cuando visitas /
  products.js → 80KB  ← solo se carga cuando visitas /products
  profile.js  → 40KB  ← solo se carga cuando visitas /profile
```

No necesitas hacer nada especial, Framework Mode lo hace automáticamente. También **pre-carga** las rutas cuando el usuario pasa el mouse sobre un `<Link>`.

---

### SSR (Server Side Rendering)

El HTML se genera **en el servidor** en cada petición y se envía al navegador ya renderizado.

```
Flujo SSR:
  1. Usuario visita /products
  2. El SERVIDOR ejecuta React y genera el HTML
  3. El navegador recibe HTML completo (se ve inmediatamente)
  4. JavaScript se carga y "hidrata" la página (la hace interactiva)
```

**Ventajas:**
- Mejor SEO (los buscadores ven el contenido)
- Mejor primera carga (el usuario ve contenido inmediatamente)
- Los datos se cargan en el servidor (más rápido, acceso directo a la DB)

---

### SPA (Single Page Application)

Todo corre **solo en el navegador**. El servidor solo envía un HTML vacío con un `<div id="root">` y JavaScript.

```
Flujo SPA:
  1. Usuario visita /products
  2. El servidor envía un HTML vacío + bundle.js
  3. JavaScript se ejecuta en el navegador
  4. React renderiza la página
  5. Se hacen llamadas fetch() para obtener datos
```

**Ventajas:**
- Setup más simple (no necesitas servidor)
- Puedes hostear en cualquier CDN/hosting estático (GitHub Pages, Netlify, etc.)
- Navegación instantánea después de la carga inicial

> [!NOTE]
> Tu proyecto actual con Vite es una **SPA**.

---

### SSG (Static Site Generation)

El HTML se genera **en build time** (al hacer `npm run build`). Se crean archivos `.html` estáticos para cada ruta.

```
Flujo SSG:
  1. Ejecutas: npm run build
  2. React Router genera: products.html, about.html, etc.
  3. Subes los archivos estáticos a un CDN
  4. El usuario recibe HTML pre-generado (ultra rápido)
```

**Ventajas:**
- La carga más rápida posible (archivos ya generados)
- No necesitas servidor corriendo
- Perfecto para contenido que no cambia frecuentemente (blogs, docs, landing pages)

**Desventaja:** Si el contenido cambia, necesitas hacer build de nuevo.

---

## 📊 Resumen Visual

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRAMEWORK MODE                          │
│  href type-safe, Route Module API, Code Splitting, SSR/SSG     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                      DATA MODE                          │   │
│  │  loader, action, useFetcher, Pending UI                 │   │
│  │  ┌─────────────────────────────────────────────────┐   │   │
│  │  │                DECLARATIVE MODE                  │   │   │
│  │  │  <Link>, <NavLink>, <Routes>, <Route>           │   │   │
│  │  │  useNavigate, useLocation, useParams            │   │   │
│  │  └─────────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

Cada modo contiene todo lo del anterior + funcionalidades nuevas.
