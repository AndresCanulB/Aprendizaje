import { use, type Usable } from "react";
import { type User } from "./api/get-user.action";

interface Props {
  getUser: Usable<User>;
}

export const ClientInformation = ({ getUser }: Props) => {
  const user = use(getUser);
  // const user = await getUserAction(id)

  // useEffect(() => {
  //   getUserAction(id).then(console.log);
  // }, [id]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h2 className="text-4xl font-thin text-white">
        {user.name} - #{user.id}
      </h2>

      <p className="text-white text-2xl">{user.location}</p>
      <p className="text-white text-xl">{user.role}</p>
    </div>
  );
};

/*

¿Qué es use?

Permite leer el valor de una Promesa directamente dentro de un componente. 

Cuando la promesa aún no se ha resuelto, React "suspende" el componente.

¿Qué es <Suspense>?

<Suspense> es un componente de React que permite mostrar un fallback.
(Como un spinner o texto de "Cargando...") mientras un componente hijo está esperando datos.

Es como un "try/catch" pero para carga de datos en la UI.

Reglas importantes:

- No crear la promesa dentro del componente: Si la creas dentro, se crearía una nueva en cada render. Créala en el padre o fuera del componente.

- use puede leer Promesas y Contextos: A diferencia de otros hooks, use puede usarse dentro de condicionales y loops.

- Siempre necesita un <Suspense> padre: Si no hay uno, React lanzará un error.

¿Cuándo usar use + Suspense?

- Fetching de datos: Cargar información de una API y mostrar un skeleton mientras carga

- Lazy loading de componentes: React.lazy() + Suspense para cargar componentes bajo demanda

- Streaming SSR: En frameworks como Next.js, para enviar HTML parcial al cliente

- Múltiples fuentes de datos: Anidar varios <Suspense> para que cada sección cargue independientemente

*/
