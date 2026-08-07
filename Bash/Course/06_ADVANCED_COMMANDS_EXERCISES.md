![](../Images/header.jpg)

# 6 - COMANDOS AVANZADOS (EJERCICIOS)

## Ejercicios

1. Muestra todo el contenido de un archivo.

cat index.html

1. Muestra el contenido paginado de un archivo.

less index.html

1. Muestra las 15 primeras líneas de un archivo.

head -n 15 index.html

1. Muestra las 15 últimas líneas de un archivo.

tail -n 15 index.html

1. Busca una palabra en un archivo.

grep "body" index.html

1. Cuenta las líneas de un archivo.

wc index.html

1. Redirige una salida y guárdala en un archivo.

echo "Hola desde la terminal" > texto.txt

1. Añade una nueva salida al archivo anterior.

echo "Nuevo texto agregado desde la terminal con echo >>" >> texto.txt

1. Encadena 3 comandos.

echo "3- Tercer texto con pipes |" >> texto.txt | grep -r "texto" ../Testing | wc -w texto.txt 

1. Crea una variable local y muéstrala.

name="Azure"
echo $name

---

[[◀️ Lección anterior](./05_ADVANCED_COMMANDS.md)] [[Inicio 🔼](../README.md)] [[Siguiente lección ▶️](./07_BASIC_EDITORS.md)]