# Formas de usar useContext — Ejemplos

---

## 1. Solo lectura (valor fijo)

El valor se define una vez y **nunca cambia**. Útil para configuración o constantes.

### Crear el contexto
```tsx
// context/ConfigContext.tsx
import { createContext } from 'react';

export const ConfigContext = createContext('es');  // idioma por defecto
```

### Proveer el valor
```tsx
// App.tsx
import { ConfigContext } from './context/ConfigContext';
import { Titulo } from './components/Titulo';

function App() {
  return (
    <ConfigContext.Provider value="es">
      <Titulo />
    </ConfigContext.Provider>
  );
}
```

### Leer el valor
```tsx
// components/Titulo.tsx
import { useContext } from 'react';
import { ConfigContext } from '../context/ConfigContext';

function Titulo() {
  const idioma = useContext(ConfigContext);  // → "es"

  return <h1>{idioma === 'es' ? 'Bienvenido' : 'Welcome'}</h1>;
}
```

> [!NOTE]
> Este patrón es el más simple. El valor `"es"` nunca cambia. Si necesitas que cambie, usa el patrón 2.

---

## 2. useContext + useState (valor dinámico)

El valor **puede cambiar** y todos los componentes que lo usan se actualizan automáticamente.

### Crear el contexto
```tsx
// context/ThemeContext.tsx
import { createContext } from 'react';

// El contexto va a compartir un objeto con dos cosas:
// - theme: el valor actual ("light" o "dark")
// - toggleTheme: la función para cambiarlo
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},   // función vacía como respaldo
});
```

### Proveer el valor con useState
```tsx
// App.tsx
import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { Pagina } from './components/Pagina';
import { BotonTheme } from './components/BotonTheme';

function App() {
  const [theme, setTheme] = useState('light');

  // Esta función alterna entre "light" y "dark"
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    // Compartimos el valor Y la función para cambiarlo
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Pagina />
      <BotonTheme />
    </ThemeContext.Provider>
  );
}
```

### Leer el valor (un componente)
```tsx
// components/Pagina.tsx
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Pagina() {
  const { theme } = useContext(ThemeContext);  // solo lee el theme

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#fff',
                  color: theme === 'dark' ? '#fff' : '#333' }}>
      <h1>El tema actual es: {theme}</h1>
    </div>
  );
}
```

### Cambiar el valor (otro componente)
```tsx
// components/BotonTheme.tsx
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function BotonTheme() {
  const { toggleTheme } = useContext(ThemeContext);  // solo usa la función

  return <button onClick={toggleTheme}>Cambiar tema</button>;
}
```

### ¿Qué pasa al hacer clic?

```
1. BotonTheme llama toggleTheme()
2. setTheme cambia "light" → "dark" en App
3. El Provider detecta que value cambió
4. Pagina se re-renderiza → muestra "dark"
5. BotonTheme se re-renderiza también
```

> [!IMPORTANT]
> Este es el patrón más común. El `useState` vive en donde está el Provider, y se comparte tanto el valor como la función `set` para que cualquier hijo pueda leer o modificar.

---

## 3. useContext + useReducer (lógica compleja)

Cuando tienes **varias acciones** sobre el mismo dato, `useReducer` es más ordenado que muchos `useState`.

### Crear el contexto
```tsx
// context/CounterContext.tsx
import { createContext, Dispatch } from 'react';

// Las acciones posibles
type Action =
  | { type: 'incrementar' }
  | { type: 'decrementar' }
  | { type: 'reset' };

interface CounterContextType {
  contador: number;
  dispatch: Dispatch<Action>;
}

export const CounterContext = createContext<CounterContextType>({
  contador: 0,
  dispatch: () => {},
});

// El reducer: recibe el estado actual y una acción, devuelve el nuevo estado
export function counterReducer(state: number, action: Action): number {
  switch (action.type) {
    case 'incrementar': return state + 1;
    case 'decrementar': return state - 1;
    case 'reset':       return 0;
  }
}
```

### Proveer con useReducer
```tsx
// App.tsx
import { useReducer } from 'react';
import { CounterContext, counterReducer } from './context/CounterContext';
import { Display } from './components/Display';
import { Controles } from './components/Controles';

function App() {
  const [contador, dispatch] = useReducer(counterReducer, 0);

  return (
    <CounterContext.Provider value={{ contador, dispatch }}>
      <Display />
      <Controles />
    </CounterContext.Provider>
  );
}
```

### Leer el valor
```tsx
// components/Display.tsx
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function Display() {
  const { contador } = useContext(CounterContext);

  return <h1>Contador: {contador}</h1>;
}
```

### Despachar acciones
```tsx
// components/Controles.tsx
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function Controles() {
  const { dispatch } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'incrementar' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>-1</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
```

> [!TIP]
> Usa `useReducer` cuando tengas 3+ acciones sobre el mismo estado. Es más organizado que tener múltiples funciones `setState`.

---

## 4. Custom Provider (patrón limpio)

Encapsula toda la lógica del contexto en un solo archivo. Es el patrón **más usado en producción**.

```tsx
// context/UserProvider.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Definir el tipo
interface UserContextType {
  nombre: string;
  login: (nombre: string) => void;
  logout: () => void;
}

// 2. Crear el contexto (privado, no se exporta)
const UserContext = createContext<UserContextType | null>(null);

// 3. Crear el Provider como componente (se exporta)
export function UserProvider({ children }: { children: ReactNode }) {
  const [nombre, setNombre] = useState('');

  const login = (nuevoNombre: string) => setNombre(nuevoNombre);
  const logout = () => setNombre('');

  return (
    <UserContext.Provider value={{ nombre, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// 4. Crear un hook personalizado para consumir (se exporta)
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe usarse dentro de un <UserProvider>');
  }
  return context;
}
```

### Usar el Provider
```tsx
// App.tsx
import { UserProvider } from './context/UserProvider';
import { Perfil } from './components/Perfil';

function App() {
  return (
    <UserProvider>
      <Perfil />
    </UserProvider>
  );
}
```

### Consumir con el hook personalizado
```tsx
// components/Perfil.tsx
import { useUser } from '../context/UserProvider';

function Perfil() {
  const { nombre, login, logout } = useUser();  // hook limpio y directo

  if (!nombre) {
    return <button onClick={() => login('Andrés')}>Iniciar sesión</button>;
  }

  return (
    <div>
      <h1>Hola, {nombre}</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}
```

> [!IMPORTANT]
> **Ventajas de este patrón:**
> - El contexto y su lógica están en un solo archivo
> - Los componentes solo importan `useUser()`, no necesitan saber nada de `createContext`
> - El `throw new Error` avisa si alguien usa `useUser()` fuera del Provider

---

## Comparación rápida

| Patrón | Cuándo usarlo |
|---|---|
| **Solo lectura** | Valores que nunca cambian (config, constantes) |
| **+ useState** | Un valor que cambia (tema, usuario, idioma) |
| **+ useReducer** | Múltiples acciones sobre un estado (carrito de compras, formularios complejos) |
| **Custom Provider** | En producción, para mantener el código limpio y organizado |
