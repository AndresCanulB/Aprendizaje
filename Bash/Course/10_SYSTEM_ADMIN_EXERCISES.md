![](../Images/header.jpg)

# 10 - ADMINISTRACIÓN DEL SISTEMA (EJERCICIOS)

## Ejercicios

1. Crea un archivo y visualiza sus permisos.

touch permisos.txt

ls -l permisos.txt

1. Otorga permisos de ejecución sólo al propietario en modo simbólico.

chmod u=x permisos.txt

1. Cambia sus permisos a 644.

chmod 644 permisos.txt

1. Elimina los permisos para el grupo.

chmod 644 permisos.txt

1. Haz que sólo pueda ejecutarse por el propietario.

chmod 744 permisos.txt

1. Crea una carpeta y dale permisos para que sólo el usuario pueda acceder.

mkdir private

chmod 700 private

ls -ld private

1. Cámbiale el propietario a otro usuario de tu sistema (si existe y tienes permisos).

sudo chown new permisos.txt

1. Consulta la máscara de permisos actual y calcula qué permisos por defecto tendrán los nuevos archivos.

umask

022

777 - Directorios => 755

666 - Ficheros => 644

1. Cambia la máscara, crea un archivo y consulta los permisos por defecto del archivo.

umask 000

1. Utiliza un comando como superusuario.

sudo chown azure permisos.txt

---

[[◀️ Lección anterior](./09_SYSTEM_ADMIN.md)] [[Inicio 🔼](../README.md)] [[Siguiente lección ▶️](./11_PROCESS.md)]