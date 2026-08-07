![](../Images/header.jpg)

# 8 - EDITORES BÁSICOS (EJERCICIOS)

## Ejercicios

### nano

1. Crea un archivo llamado nota.txt y escribe tres líneas de texto.

touch nota.txt

Hola
Desde nano
Con zsh

1. Abre nota.txt, añade una línea al final y guarda los cambios.

nano nota.txt

1. Abre un archivo nuevo llamado recordatorio.txt, escribe algo y sal sin guardar.

nano recordatorio.txt

Texto sin guardar

^x

1. Busca una palabra específica en un archivo existente.

nano index.html

^w

body

1. Corta una línea y pégala en otra parte.

nano index.html

^k

^u

### vim

1. Crea apuntes.txt, entra en modo inserción y escribe una frase.

touch apuntes.txt

i

Esta es una frase desde VIM con zsh

:wq 

ZZ

1. Mueve el cursor sin usar las flechas.

hjkl

1. Borra una línea completa y deshaz el cambio.

dd

u

^r

u

1. Copia una línea y pégala debajo.

yy

p

1. Guarda los cambios y sal.

:wq

ZZ

---

[[◀️ Lección anterior](./07_BASIC_EDITORS.md)] [[Inicio 🔼](../README.md)] [[Siguiente lección ▶️](./09_SYSTEM_ADMIN.md)]