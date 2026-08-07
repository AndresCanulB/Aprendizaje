![](../Images/header.jpg)

# 16 - LÓGICA (EJERCICIOS)

## Ejercicios

1. Crea un script que pida un número y muestre si es positivo, negativo o cero usando if, elif y else.

#!/bin/zsh

printf "Digite un numero: "
read number

if [ ${number} -gt 0 ]; then
	echo "El numero es positivo"
elif [ ${number} -lt 0 ]; then
	echo "El numero es negativo"
else 
	echo "El numero es 0"
fi

1. Pide al usuario dos números y muestra cuál es mayor o si son iguales.

#!/bin/zsh

printf "Digite el primer numero: "
read num1

printf "Digite el segundo numero: "
read num2

if [ ${num1} -gt ${num2} ]; then
	echo "El perimer numero: ${num1} es mas grande"
elif [ ${num1} -lt ${num2} ]; then
	echo "El segundo numero: ${num2} es mas grande"
else 
	echo "Los dos son iguales"
fi

1. Crea un script que muestre un menú con tres opciones y ejecute la opción correspondiente según la elección del usuario.

#!/bin/zsh

printf "Elija una opcion (1/2/3): "
read option

case ${option} in
    1) echo "Has elegido la primera opcion";;
    2) echo "Has elegido la segunda opcion";;
    3) echo "Has elegido la tercera opcion";;
    *) echo "Error: Has introducido un valor incorrecto";;
esac

1. Muestra todos los números del 1 al 10 usando un bucle for.

#!/bin/zsh

for i in 1 2 3 4 5 6 7 9 10
do
    echo "Numero: ${i}"
done

1. Crea un script que pida números al usuario hasta que introduzca el número 0. Al final, muestra cuántos números ha introducido en total.

#!/bin/zsh

until [ ${num} = 0 ]
do
    echo "Digite 0 para salir"
    printf "Digite un numero: "
    read num
    numbers+=(${num})
done

echo "${numbers}"

1. Haz un script que muestre los números del 1 al 10, saltando el 5 y deteniéndose en el 8.

#!/bin/zsh

for i in 1 2 3 4 5 6 7 9 10
do
    if [ ${i} = 5 ]; then
        continue
    elif [ ${i} -ge 8 ]; then
        break
    fi
    echo "Numero: ${i}"
done

1. Crea una función saludar que reciba un nombre como argumento y muestre: Hola <nombre>, bienvenido al script.

#!/bin/zsh

greeting() {
    echo "Hola ${1}, bienvenido al script"
}

greeting Azure

1. Crea una función que reciba dos números, calcule su suma y la devuelva usando return. Muestra el resultado en el script principal.

#!/bin/zsh

printf "Digite un primer numero: "
read num1

printf "Digite un segundo numero: "
read num2

sum() {
    echo $((${1}+${2}))
}

result=$(sum ${num1} ${num2})

echo "La suma de ${num1} y ${num2} es ${result}"

1. Intenta copiar un archivo que no exista y muestra un mensaje de error si el comando falla, usando $? o ||.

#!/bin/zsh

cp file.txt ../

if [ $? -ne 0 ]; then
	echo "Error al copiar el archivo"
fi

1. Crea un script con un comentario inicial con autor, fecha, descripción y un bucle for que liste todos los archivos .sh en el directorio actual.

#!/bin/zsh

echo "Autor | Fecha | Descripcion"

for archive in *.sh
do
    echo "${archive}"
done

---

[[◀️ Lección anterior](./15_LOGIC.md)] [[Inicio 🔼](../README.md)] [[Siguiente lección ▶️](./17_CRON.md)]