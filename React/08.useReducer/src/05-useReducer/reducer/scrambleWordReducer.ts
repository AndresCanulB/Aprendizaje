export interface ScrambleWordsState {
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowErrors: number;
  maxSkips: number;
  points: number;
  scrambledWord: string;
  skipCounter: number;
  words: string[];
  totalWords: number;
}

const GAME_WORDS = ["REACT", "JAVASCRIPT", "TYPESCRIPT", "HTML", "ANGULAR", "SOLID", "NODE", "VUEJS", "SVELTE", "EXPRESS", "MONGODB", "POSTGRES", "DOCKER", "KUBERNETES", "WEBPACK", "VITE", "TAILWIND"];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = "") => {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

// Funcion para establecer el valor inicial del estado a la hora de llamar al useReducer
export const getInitialState = (): ScrambleWordsState => {
  const shuffledWords = shuffleArray([...GAME_WORDS]);
  return {
    currentWord: shuffledWords[0],
    errorCounter: 0,
    guess: "",
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(shuffledWords[0]),
    skipCounter: 0,
    words: shuffledWords,
    totalWords: shuffledWords.length
  };
};

// Acciones de la logica para el funcionamiento del componente
export type ScrambleWordsAction = { type: "SET_GUESS"; payload: string } | { type: "CHECK_ANSWER" } | { type: "START_NEW_GAME"; payload: ScrambleWordsState } | { type: "SKIP_WORD" };

// El estado (state) es el espacio en memoria de todos los valores de la funcionalidad

// Las funciones reducer deben ser puras, lo que significa que su salida debe depender únicamente de sus entradas (estado y accion).

// No deben tener efectos observables en el exterior, como modificar variables globales o realizar llamadas de red.

// Los efectos secundarios se gestionan en el componente usando el hook useEffect en respuesta a los cambios de estado.

// Funcion del reducer que contiene la logica del componente
export const scrambleWordsReducer = (state: ScrambleWordsState, action: ScrambleWordsAction): ScrambleWordsState => {
  // Siempre dentro del switch del reducer todos los caminos deben devolver el estado
  switch (action.type) {
    // Caso para obtener el texto del input del componente
    case "SET_GUESS":
      return {
        // La propagacion del state se usa para heredar los valores anteriores del estado
        ...state,
        // El valor que se obtiene del input se convierte en mayusculas sin espacios
        guess: action.payload.trim().toUpperCase()
      };

    // Caso para verificar si la respuesta es incorrecta o correcta
    case "CHECK_ANSWER": {
      if (state.currentWord === state.guess) {
        // Se elimina la primera palabra del arreglo
        const newWords = state.words.slice(1);

        return {
          ...state,
          words: newWords,
          points: state.points + 1,
          guess: "",
          currentWord: newWords[0],
          // ! Llamar una funcion al retornar el estado es una mala practica en los reducer.
          scrambledWord: scrambleWord(newWords[0])
        };
      }

      return {
        ...state,
        guess: "",
        // El errorCounter se suma +1 en los dos casos para que esten sincronizados
        errorCounter: state.errorCounter + 1,
        isGameOver: state.errorCounter + 1 >= state.maxAllowErrors
      };
    }

    case "SKIP_WORD": {
      if (state.skipCounter >= state.maxSkips) return state;

      const updatedWords = state.words.slice(1);

      return {
        ...state,
        skipCounter: state.skipCounter + 1,
        words: updatedWords,
        currentWord: updatedWords[0],
        scrambledWord: scrambleWord(updatedWords[0]),
        guess: ""
      };
    }

    case "START_NEW_GAME":
      // El paylod en este caso es un nuevo estado limpio que se pasa desde el componente.
      return action.payload;

    default:
      return state;
  }
};
