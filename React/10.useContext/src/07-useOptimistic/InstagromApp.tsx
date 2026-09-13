import { useOptimistic, useState, useTransition } from "react";
import { toast } from "sonner";

interface Comment {
  id: number;
  text: string;
  optimistic?: boolean;
}

let lastId = 2;

export const InstagromApp = () => {
  // useTransition se usa para diferenciar las actualizaciones de estado que son urgentes de las que no lo son.
  // Devuelve un booleano si se esta procesando y una funcion para iniciar la transicion.
  const [isPending, startTransition] = useTransition();

  const [comments, setComments] = useState<Comment[]>([
    { id: 1, text: "¡Gran foto!" },
    { id: 2, text: "Me encanta 🧡" }
  ]);

  // useOptimistic se usa para mostrar un estado temporal inmediato al usuario mientras espera la respuesta del servidor
  // Devuelve el estado optimista y una funcion para agregar un valor optimista temporalmente
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments, // Es la fuente de verdad (probablemente viene de useState o del servidor).

    // Función reductora, donde se le pasa el estado actual y el nuevo valor
    (currentComments, newCommentText: string) => {
      lastId++;
      return [
        // Retorna todos todos los comentarios existentes con el nuevo comentario optimista agregado al final
        ...currentComments,
        {
          id: lastId,
          text: newCommentText,
          // Bandera para diferenciar visualmente los comentarios temporales
          optimistic: true
        }
      ];
    }
  );

  // FormData es un objeto que contiene los datos de los elementos del formulario
  const handleAddComment = async (formData: FormData) => {
    // Se obtiene el valor del elemento input del formulario con el name="post-message"
    const messageText = formData.get("post-message") as string;

    addOptimisticComment(messageText);

    startTransition(async () => {
      // simular la petición http al servidor
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // ! Caso donde todo sale bien en el servidor
      // Se añade el comentario a la lista de comnetarios del estado Comments
      // setComments((prev) => [
      //   ...prev,
      //   {
      //     id: new Date().getTime(),
      //     text: messageText,
      //   },
      // ]);

      //! Este sería el código para revertir el proceso
      // Si hay un error en el servidor, se elimina el valor optimista automaticamente
      // Se establece el estado a como estaba y se muestra un error.
      setComments((prev) => prev);
      toast("Error al agregar el comentario", {
        description: "Intente nuevamente",
        duration: 10_000,
        position: "top-right",
        action: {
          label: "Cerrar",
          onClick: () => toast.dismiss()
        }
      });
    });
  };

  return (
    <div className="bg-slate-700 h-screen flex flex-col items-center justify-center">
      {/* Post de ejemplo */}
      <div className="flex flex-col items-center justify-center bg-gray-300 rounded-t-3xl p-4 w-[500px]">
        <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop" alt="Instagrom" className="object-cover rounded-xl mb-4" />
        <p className="text-black font-bold mb-4">Mira que interesante esta funcionalidad de la API de React.</p>
      </div>

      {/* Comentarios */}
      <ul className="flex flex-col items-start justify-center bg-gray-300 w-[500px] p-4">
        {optimisticComments.map((comment) => (
          <li key={comment.id} className="flex items-center gap-2 mb-2">
            <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-white text-center">A</span>
            </div>
            <p className="text-black">{comment.text}</p>
            {comment.optimistic && <span className="text-gray-500 text-sm">enviando... </span>}
          </li>
        ))}
      </ul>

      {/* Formulario de comentarios */}

      {/* action = {(event) => handleAddComment(event)} -> El evento que se envía al formulario es el objeto FormData */}
      <form action={handleAddComment} className="flex flex-col items-center justify-center bg-gray-300 w-[500px] rounded-b-3xl p-4">
        <input type="text" name="post-message" placeholder="Escribe un comentario" required className="w-full p-2 rounded-md mb-2 text-black bg-white" />
        <button type="submit" disabled={isPending} className="bg-blue-500 text-white p-2 rounded-md w-full">
          Enviar
        </button>
      </form>
    </div>
  );
};

/*

¿Qué es useOptimistic?

useOptimistic muestra un estado temporal inmediato al usuario mientras espera la respuesta del servidor, creando una experiencia de UI instantánea y fluida.

¿Qué problema resuelve?

Cuando el usuario realiza una acción (como enviar un comentario o dar un "like"), normalmente hay que esperar la respuesta del servidor antes de actualizar la UI. Esto genera una experiencia lenta:

Usuario hace clic → Espera 2 segundos → Se muestra el resultado

Lo ideal sería mostrar el resultado inmediatamente, como si ya hubiera sido exitoso, y corregir si algo falla.

La solución: useOptimistic

useOptimistic te permite mostrar un estado temporal optimista mientras una operación asíncrona está en curso. 

Cuando la operación termina, el estado real reemplaza al optimista automáticamente.

const [estadoOptimista, agregarOptimista] = useOptimistic(estadoReal, funcionReductora);

Retornos:

estadoOptimista → El estado que debes renderizar (incluye los valores temporales)

agregarOptimista → Función para añadir un valor optimista temporalmente

Argumentos:

estadoReal → El estado actual real (ej. datos del servidor)

funcionReductora → (estadoActual, valorNuevo) => nuevoEstado — cómo combinar el estado actual con el valor optimista

⚠️ Puntos clave

useOptimistic está diseñado para usarse con React Server Actions o dentro de transiciones (useTransition).

El estado optimista es temporal: existe solo mientras la acción asíncrona está en progreso.

Cuando el estado real (mensajes) se actualiza, el optimista se sincroniza automáticamente.

Es un hook de React 19 (no disponible en versiones anteriores).

*/

/*

¿Que es useTransition?

Es un hook que permite marcar una actualización de estado como "no urgente", para que React no bloquee la interfaz mientras se procesa.

Que problema resuelve?

Imagina que tienes un input de búsqueda que filtra una lista de 10,000 elementos. Cada vez que escribes una letra:

Se actualiza el texto del input ← urgente (el usuario debe ver lo que escribe)

Se filtra la lista enorme ← no urgente (puede esperar unos milisegundos)

Sin useTransition, React intenta hacer ambas cosas al mismo tiempo, lo que hace que el input se sienta lento y trabado.

Cómo se usa?

const [isPending, startTransition] = useTransition();

Te devuelve dos cosas:

isPending: un booleano que es true mientras la transición se está procesando (útil para mostrar un spinner)

startTransition: una función donde envuelves la actualización "no urgente"

Sin useTransition

- Todo se procesa junto
- El input se traba
- No hay feedback visual

Con useTransition

- Separa lo urgente de lo no urgente
- El input responde al instante
- isPending permite mostrar un loader

¿Cuándo usar useTransition?

Filtrar/buscar en listas grandes	✅ Sí
Navegación entre tabs pesados	✅ Sí
Actualizar un input simple	❌ No necesario
Fetch de datos (React 19+)	✅ Sí, con Suspense

*/
