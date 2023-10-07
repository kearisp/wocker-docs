# Mariadb

## Installation

To access the following services within the workspace, please add the following entries to your hosts file:

```text
127.0.0.1 maildev.workspace
127.0.0.1 dbadmin-mariadb.workspace
```


## Start Mariadb

```shell
ws maridb:start
```

## Backup db

The `mariadb:backup` command is used to create a backup of a MariaDB database.

```shell
ws mariadb:backup [database]
```

### Backup Location

The backup file will be saved in the following directory:

> $WS_DIR/plugins/mariadb/dump/**\[dbname]**/yyyy-MM-dd HH-mm.sql


### Delete backup

The `mariadb:delete-backup` command will remove file from `$WS_DIR` directory.

```shell
ws mariadb:delete-backup [database] [filename]
```

## Dump

The `mariadb:dump` command is used to dump a MariaDB database to a file.

```shell
ws mairadb:dump [database] > dump.sql
```
