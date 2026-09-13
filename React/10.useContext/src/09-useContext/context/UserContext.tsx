import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import { users, type User } from "../data/user-mock.data";

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

interface UserContextProps {
  // State
  authStatus: AuthStatus;
  user: User | null;
  isAuthenticated: boolean;

  // Methods
  login: (userId: number) => boolean;
  logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

// Custom Provider: Es un patron para que todo este encapsulado en un archivo, el más limpio para producción

// El provider se utiliza para implementar logica de negocio, no hay que agregar JSX dentro,

// El return solo debe tener los props.children para renderizar los componentes anidados.

// Children: Prop especial que representa los elementos aniados dentro de un componente.

// High Order Component (HOC): Es un componente que recibe hijos
export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    if (!user) {
      console.log(`Usuario no encontrado ${userId}`);
      setUser(null);
      setAuthStatus("not-authenticated");
      return false;
    }

    setUser(user);
    setAuthStatus("authenticated");
    localStorage.setItem("userId", userId.toString());
    return true;
  };

  const handleLogout = () => {
    console.log("logout");
    setAuthStatus("not-authenticated");
    setUser(null);
    localStorage.removeItem("userId");
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      handleLogin(+storedUserId);
      return;
    }

    handleLogout();
  }, []);

  return (
    // En versiones nuevas de React ya no es necesario usar UserContext.Provider al crear el provider.
    <UserContext
      value={{
        authStatus: authStatus,
        isAuthenticated: authStatus === "authenticated",
        user: user,
        login: handleLogin,
        logout: handleLogout
      }}
    >
      {children}
    </UserContext>
  );
};

/*

1. ¿Qué problema resuelve useContext?

Imagina que tienes un dato (por ejemplo, el nombre del usuario) en un componente abuelo, y lo necesitas en un componente nieto. 

Sin useContext, tendrías que pasar ese dato como prop por cada nivel intermedio, aunque esos componentes no lo usen. 

Esto se llama prop drilling.

2. ¿Qué es useContext?

Es un hook que permite compartir datos entre componentes sin pasarlos manualmente por props. 

Funciona como un "canal directo" entre el componente que provee el dato y cualquier componente que lo necesite, sin importar qué tan profundo esté en el árbol.

3. Conceptos de useContext:

createContext():	    Crea el contexto con un valor por defecto

<Context.Provider>:	    Define qué valor estará disponible para sus hijos

useContext(Context):	Lee el valor del Provider más cercano hacia arriba

Re-render:		        Cuando el value del Provider cambia, todos los componentes que usan ese contexto se vuelven a renderizar

4. ¿Cuándo usarlo?

✅ Datos "globales": tema, idioma, usuario autenticado, configuración.

❌ No para reemplazar todo el manejo de estado. 

Si un dato solo lo usan un padre y su hijo directo, una prop simple es mejor.

Regla práctica: Si te encuentras pasando la misma prop a través de 3+ niveles de componentes, es buen momento para considerar useContext.

5. Ejemplo de useContext:

- Crear el contexto

Archivo: context/ConfigContext.tsx

import { createContext } from 'react';

Creamos el contexto. El string vacío es el valor por defecto.

export const ConfigContext = createContext('es');  // idioma por defecto

- Proveer el valor

Archivo: App.tsx

import { ConfigContext } from './context/ConfigContext';
import { Titulo } from './components/Titulo';

function App() {
  return (

    El provider no es un componente, solo una forma de compartir datos 

    <ConfigContext.Provider value="es">

      Todo lo que esté dentro del provider puede leer el value (es)

      <Titulo />

    </ConfigContext.Provider>
  );
}

- Leer el valor

Archivo: components/Titulo.tsx

import { useContext } from 'react';
import { ConfigContext } from '../context/ConfigContext';

function Titulo() {

  useContext lee el valor del Provider más cercano hacia arriba

  const idioma = useContext(ConfigContext);  // → "es"

  return <h1>{idioma === 'es' ? 'Bienvenido' : 'Welcome'}</h1>;
}

- Notas:

Un createContext puede tener varios Provider

Cada Provider tiene su propia instancia del value.

Los hijos que usen useContext leerán el value del Provider más cercano hacia arriba.

El useContext se puede mezclar con useState y useReducer:

- useContext (Solo lectura): valor fijo, nunca cambia

- useContext + useState: valor dinámico, el más común

- useContext + useReducer: cuando tienes muchas acciones sobre el mismo dato

Cuando se cambia el value del Provider, todos los componentes hijos que usan useContext se vuelven a renderizar y comparten el mismo value.

*/
