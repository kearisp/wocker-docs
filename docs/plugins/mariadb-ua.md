# MariaDB

## Інсталяція

Наступна команда встановлює плагін MariaDB.

```shell
ws plugin:add mariadb
```

Після інсталяції необхідно додати наступні рядки до файлу **hosts**:

```text
127.0.0.1 mariadb.workspace
127.0.0.1 dbadmin-mariadb.workspace
```


## Запуск MariaDB

```shell
ws mariadb:start
```


## Створення бекапу MariaDB

Бекап у розумінні плагіну це ніщо інше як просто результат роботи команди `mysqldump`, але файл з дампом буде збережено у директорію плагіну для подальшої можливості відновлення.
Команду `mariadb:backup` можна використовувати для створення бекапу бази даних MariaDB.

```shell
ws mariadb:backup [database] [filename]
```

_filename_ - назва файлу під яким буде створено дамп бд, якщо не вказувати назву, то дамп назва файлу буде вказана автоматично на основі поточного часу:
- ``yyyy-MM-dd HH-mm``.

_database_ - назва бази даних для якої необхідно створити бекап.

При пропуску назви бд інтерфейс командного рядка запитає назву бд:

```shell
$ ws mariadb:backup
? Database:  (Use arrow keys)
❯ example_database1
  example_database2
  example_database3
```


### Розташування бекапів

Файли з бекапами будуть збережені у наступну директорію:

> ${WS_DIR}/plugins/mariadb/dump/**\[dbname]**/**\[filename]**.sql


### Delete backup

The `mariadb:delete-backup` command will remove file from `$WS_DIR` directory.

```shell
ws mariadb:backup -d [database] [filename]
```

## Dump

The `mariadb:dump` command is used to dump a MariaDB database to a file.

```shell
ws mairadb:dump [database] > dump.sql
```
