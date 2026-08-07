const person = {
  name: "Tony",
  age: 45,
  key: "Ironman"
};

// Desestructuracion por partes
// const name = person.name;
// const age = person.age;
// const key = person.key;

// Desestructuracion en una sola linea
// En los objetos no importa el orden de la desestructuracion, pero si es importante conocer los nombres de las propiedades
// Tambien se puede cambiar el nombre de la variable al desestructurar con `name: newName`
const { key, name: ironmanName, age } = person;

console.log({ ironmanName, age, key });

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

// Se puede desestructurar el objeto en los parametros de la funcion
const useContext = ({ key, name, age, rank = "sin rango" }: Hero) => {
  return {
    keyName: key,
    user: {
      // Se puede obviar el nombre de la propiedad si es el mismo que el de la variable
      // name: name,
      name,
      age
    },
    rank: rank
  };
};

// Se puede obtener la propiedad del objeto anidado con `user: { name }`
// const { rank, keyName, user: { name } } = useContext(person);

// Metodo recomendado
const { rank, keyName, user } = useContext(person);
const { name } = user;

console.log({ rank, keyName, name });
