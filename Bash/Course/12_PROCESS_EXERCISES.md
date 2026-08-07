![](../Images/header.jpg)

# 12 - PROCESOS Y ALIAS (EJERCICIOS)

## Ejercicios

1. Muestra todos los procesos del sistema.

ps aux

1. Muestra el monitor interactivo de procesos.

top

htop

1. Utiliza el comando free de manera correcta.

free -h

1. Lanza sleep 100 en la terminal, suspéndelo, mándalo al segundo plano y tráelo al primer plano.

sleep 100

^z

bg %1

fg %1

1. Lanza un proceso como sleep y termínalo usando su PID.

sleep 100

^z

kill -9 9404

1. Consulta el espacio en disco.

df -h

1. Consulta el historial.

history

1. Repite el último comando.

!!

1. Crea y prueba un alias. 

alias ll="ls -lh"

1. Elimina el alias que acabas de crear.

unalias ll

---

[[◀️ Lección anterior](./11_PROCESS.md)] [[Inicio 🔼](../README.md)] [[Siguiente lección ▶️](./13_SCRIPTING.md)]