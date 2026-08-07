![](../Images/header.jpg)

# 4 - GESTIÓN DE ARCHIVOS (EJERCICIOS)

## Ejercicios

1. Crea un directorio.

mkdir practice

2. Elimina el directorio que acabas de crear.

rm -ri practice

3. Copia un archivo en el directorio actual y fuera de éste.

cp -r curso copia_curso

cp -r curso ../../Ubuntu/

4. Mueve un archivo del directorio actual.

mv prueba.txt curso

5. Cambia el nombre del archivo que acabas de mover.

mv prueba.txt texto.txt

6. Lista todos los archivos de un tipo usando un comodín.

ls *.txt

7. Elimina un directorio de manera recursiva (cuidado con lo que vas a borrar).

rm -ri prueba

8. Elimina todos los archivos de un mismo tipo (cuidado con lo que vas a borrar).

rm -ri *.txt

9. Utiliza el comando tree.

10. Busca un archivo concreto en el directorio actual utilizando find.

find . -name "texto.txt"

---

[[◀️ Lección anterior](./03_FILE_MANAGEMENT.md)] [[Inicio 🔼](../README.md)] [[Siguiente lección ▶️](./05_ADVANCED_COMMANDS.md)]
