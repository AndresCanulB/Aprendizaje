![](../Images/header.jpg)

# 14 - SCRIPTING (EJERCICIOS)

## Ejercicios

1. Crea un script que imprima en pantalla: Hola mundo desde Bash.

#!/bin/zsh

echo "Hola mundo desde ZSH"

1. Crea un script que muestre la fecha y el directorio actual.

#!/bin/zsh

echo "Fecha $(date)"
echo "Diretorio actual $(pwd)"

1. Crea un script que guarde tu nombre en una variable y lo muestre en pantalla.

#!/bin/zsh

printf "¿Cual es tu edad?"
read name

echo "Tu nombre es ${name}"

1. Crea un script que declare dos variables numéricas, las sume, reste y multiplique, mostrando el resultado de cada operación.

#!/bin/zsh

a=20
a=10

sum=$((a+b))

sub=$((a-b))

mult=$((a*b))

div=$((a/b))

echo "La suma es ${sum} | La resta es ${sub} | La multiplicacion es ${mult} | La division es ${div}"

1. Crea un script que pida tu nombre con read y lo muestre.

#!/bin/zsh

printf "Cual es su nombre?"
read name

echo "Su nombre es ${name}"

1. Crea un script que pida dos números al usuario y muestre su suma.

#!/bin/zsh

printf "Digite el primer numero: "
read a

printf "Digite el segundo numero: "
read b

sum=$((a+b))

echo "La suma es ${sum}"

1. Crea un script con tres argumentos que muestre el primero y el tercero.

#!/bin/zsh

echo "El nombre del archivo es: ${0}" 
echo "El primer argumento es ${1}"
echo "El tercer argumento es ${3}"

1. Crea un script con argumentos que muestre el número total.

#!/bin/zsh

echo "El nombre del archivo es: ${0}" 
echo "El primer argumento es ${1}"
echo "El tercer argumento es ${3}"
echo "Numero de argumentos: ${#}"

1. Crea un script que reciba dos números como argumentos y muestre su suma, resta, multiplicación y división.

#!/bin/zsh

printf "Digite el primer numero: "
read a

printf "Digite el segundo numero: "
read b

sum=$((a+b))

sub=$((a-b))

mult=$((a*b))

div=$((a/b))

echo "La suma es ${sum} | La resta es ${sub} | La multiplicacion es ${mult} | La division es ${div}"

1. Crea un script que cree un archivo de texto y guarde tu nombre en su interior.

#!/bin/zsh

printf "¿Cual es su nombre?: "


echo "#${name}" >> ./add_name.sh
#Azure

---

[[◀️ Lección anterior](./13_SCRIPTING.md)] [[Inicio 🔼](../README.md)] [[Siguiente lección ▶️](./15_LOGIC.md)]