![](../Images/header.jpg)

# 18 - CRON (EJERCICIOS)

## Ejercicios

1. Crea un script que muestre la fecha y hora actual en un archivo. Programa su ejecución cada minuto con una cron.

#!/bin/zsh

date +"%Y-%m-%d %H:%M:%S"

* * * * * /home/azure/practice/scripts/cron_date.sh >> /home/azure/practice/logs/date.log 

1. Crea un script que muestre "Hola desde cron" en un archivo. Configura cron para ejecutarlo cada 5 minutos.

#!/bin/zsh

echo "Hola desde cron"

*/5 * * * * /home/azure/practice/scripts/cron_hello.sh >> /home/azure/practice/logs/hello.log 

1. Escribe un script de backup que comprima una carpeta en un archivo con fecha. Programa su ejecución cada día a las 2:00 AM.

#!/usr/bin/env zsh

SOURCE_DIR="$HOME/practice/scripts"
BACKUP_DIR="$HOME/practice/backups"

mkdir -p "$BACKUP_DIR"

DATE=$(date +"%Y-%m-%d_%H-%M-%S")

tar -czf "$BACKUP_DIR/backup_$DATE.tar.gz" "$SOURCE_DIR"

echo "Backup creado: $BACKUP_DIR/backup_$DATE.tar.gz"

* 2 * * * /home/azure/practice/scripts/backup.sh >> /home/azure/practice/logs/backup.log

1. Haz un script que borre archivos .log de una carpeta temporal. Programa su ejecución todos los domingos a la medianoche.

#!/usr/bin/env zsh

rm -f /home/azure/practice/logs/*.log 

0 0 * * SUN /home/azure/practice/scripts/cron_logs.sh >> /home/azure/practice/logs/delete.log

1. Programa un script que escriba la hora actual, ejecutándose cada hora de 9 a 17 (horario laboral).

#!/usr/bin/env zsh

date +"%H:%M:%S"

0 9-17 * * * /home/azure/practice/scripts/cron_time.sh >> /home/azure/practice/logs/time.log

1. Programa un script que muestre "Hoy toca practicar" en un archivo de log solo los lunes, miércoles y viernes a las 8:00 AM.

#!/usr/bin/env zsh

echo "$(date): Hoy toca practicar"

0 8 * * 1,3,5 /home/azure/practice/scripts/cron_practice.sh >> /home/azure/practice/logs/practice.log

1. Modifica uno de los scripts para que su salida y errores se guarden en cron.log.

#!/bin/zsh

dte +"%Y-%m-%d %H:%M:%S"

if [ $? -ne 0 ]; then
	echo "Error al mostrar los datos"
fi

1. Programa un script que muestre "Sistema OK" y lo ejecute cada 10 minutos.

#!/bin/zsh

echo "Sistema OK"

*/10 * * * * /home/azure/practice/scripts/cron_ok.sh >> /home/azure/practice/logs/ok.log

1. Crea un script que genere un archivo con la fecha actual. Prográmalo para ejecutarse el primer día de cada mes a medianoche.

#!/usr/bin/env zsh

touch "/home/azure/practice/logs/$(date +%Y-%m-%d).txt"

0 0 1 * * /home/azure/practice/scripts/cron_date.sh >> /home/azure/practice/logs/date.log

1. Configura un script que escriba "Probando cron" en un archivo. Después, buscar información para revisar los logs del sistema y confirmar su ejecución.

#!/usr/bin/env zsh

echo "$(date): Probando cron" >> /home/azure/practice/text/test.txt

* * * * * /home/azure/practice/scripts/cron_date.sh

A) Log del sistema (cron)
grep CRON /var/log/syslog


B) Ver el archivo generado por tu script
cat /home/azure/practice/text/test.txt

---

[[◀️ Lección anterior](./17_CRON.md)] [[Inicio 🔼](../README.md)] [[Siguiente lección ▶️](./19_WARP.md)]