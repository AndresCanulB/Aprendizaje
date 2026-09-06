import * as z from "zod/v4";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

// El payload es el valor o argumento que necesita cada acción
export type TaskAction = { type: "ADD_TODO"; payload: string } | { type: "TOGGLE_TODO"; payload: number } | { type: "DELETE_TODO"; payload: number };

const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean()
});

const TaskStateScheme = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number()
});

export const getTasksInitialState = (): TaskState => {
  // Se obtiene el estado guardado en LocalStorage
  const localStorageState = localStorage.getItem("tasks-state");

  if (!localStorageState) {
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0
    };
  }

  // Validar mediante Zod
  const result = TaskStateScheme.safeParse(JSON.parse(localStorageState));

  if (result.error) {
    console.log(result.error);
    return {
      todos: [],
      completed: 0,
      pending: 0,
      length: 0
    };
  }

  // ! Cuidado, porque el objeto puede haber sido manipulado
  return result.data;
};

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false
      };

      // ! No lo deben de hacer
      // state.todos.push(newTodo)

      // El state es un objeto que contiene todos los datos del progreso de las tareas
      return {
        // ...state copia el progreso de todas las propiedades y las deja en el nuevo objeto
        ...state,
        // Las propiedades que se modifiquen se actualizan por encima de la copia
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.pending + 1
      };
    }

    case "DELETE_TODO": {
      const currentTodos = state.todos.filter((todo) => todo.id !== action.payload);

      // const completedTodos = currentTodos.filter((todo) => todo.completed).length;
      // const pendingTodos = currentTodos.length - completedTodos;

      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        // Se filtran todos los todos que estan completados, todo.completed === true es igual a todo.completed
        completed: currentTodos.filter((todo) => todo.completed).length,
        // Se filtran todos los todos que no estan completados, todo.completed === false es igual a !todo.completed
        pending: currentTodos.filter((todo) => !todo.completed).length
      };
    }

    case "TOGGLE_TODO": {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      return {
        ...state,
        todos: updatedTodos,
        completed: updatedTodos.filter((todo) => todo.completed).length,
        pending: updatedTodos.filter((todo) => !todo.completed).length
      };
    }

    default:
      return state;
  }
};

/*

¿Qué es useReducer?

useReducer es un hook de React para manejar estado complejo en un componente. 

Es una alternativa a useState cuando la lógica de actualización del estado se vuelve más elaborada.

Los 3 elementos clave:

 - State: El estado actual

 - Action: Un objeto que describe qué pasó

 - Reducer: Una función pura que recibe (state, action) y retorna el nuevo estado

¿Cuándo usar useReducer en vez de useState?

Usa useState

 - Estado simple (un booleano, un string, un número)
 - Pocas formas de actualizar
 - Lógica de actualización simple

Usa useReducer

 - Estado con múltiples sub-valores (objetos/arrays)
 - Muchas acciones diferentes sobre el mismo estado (agregar, borrar, resetear)
 - Lógica compleja donde un cambio afecta varios sub-valores a la vez

Regla de oro del reducer

El reducer debe ser una función pura: recibe estado + acción → retorna nuevo estado.

Regla práctica: si te encuentras con múltiples useState que siempre cambian juntos, o con lógica condicional compleja al hacer setState, es buen momento para migrar a useReducer.

Beneficios principales:

Centraliza la lógica: toda la lógica de actualización vive en un solo lugar (el reducer).

Predecible: dado un estado y una acción, siempre produce el mismo resultado (función pura).

Testeable: puedes testear el reducer como una función normal, sin necesidad de renderizar componentes.

Escalable: facilita agregar nuevas acciones sin modificar el componente.


La analogía simple

Imagina un cajero automático:

Estado → el saldo de tu cuenta (ej: $1000)

Acción → lo que quieres hacer (ej: "DEPOSITAR $200")

Reducer → la función que calcula el nuevo saldo basándose en la acción

import { useReducer } from 'react';

Caso practico:

1. Definir el reducer (la lógica)

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
}

2. Usar en el componente

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
           ↑ estado actual  ↑ función para enviar acciones    ↑ estado inicial

  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

*/
