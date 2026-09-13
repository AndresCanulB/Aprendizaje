import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export const LoginPage = () => {
  const { login } = useContext(UserContext);
  const [userId, setUserId] = useState("");

  const navigation = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Se puede cambiar un string a numero agregando +
    const result = login(+userId);

    console.log({ result });

    if (!result) {
      toast.error("Usuario no encontrado");
    }

    navigation("/profile");
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Iniciar sesión</h1>

      <hr />

      {/* Hay varias formas de trabar los formularios, con actions o con onSubmit */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-10">
        <Input type="number" placeholder="ID del usuario" value={userId} onChange={(event) => setUserId(event.target.value)} />

        <Button type="submit">Login</Button>
      </form>

      <Link to={"/about"}>
        <Button variant="ghost">Volver a la pagina principal</Button>
      </Link>
    </div>
  );
};

/*

onSubmit vs action en formularios React

1. onSubmit — La forma clásica

Usas un evento, llamas preventDefault(), y manejas los datos manualmente.

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();  // evita que la página se recargue
  const formData = new FormData(e.target as HTMLFormElement);
  const userId = formData.get('userId');
  console.log(userId);
};

<form onSubmit={handleSubmit}>
  <Input name="userId" type="number" />
  <Button type="submit">Login</Button>
</form>

Características:

- Tú controlas todo manualmente

- Necesitas preventDefault() siempre

- Funciona en cualquier versión de React

2. action — La forma nueva (React 19+)

React maneja el formulario por ti. Le pasas una función que recibe directamente un FormData.

const loginAction = (formData: FormData) => {
  const userId = formData.get('userId');
  console.log(userId);
};

<form action={loginAction}>
  <Input name="userId" type="number" />
  <Button type="submit">Login</Button>
</form>

Características:

- No necesitas preventDefault() — React lo hace por ti

- Recibes el FormData directamente como argumento

- Más limpio y con menos código

- Solo funciona en React 19+

¿Cuál usar?

Si estás en React 19+ (que es tu caso con Vite reciente): usa action, es más moderno y limpio.

Si necesitas compatibilidad con versiones anteriores: usa onSubmit.

Ambos son válidos, no hay "mala práctica" en usar ninguno.

*/
