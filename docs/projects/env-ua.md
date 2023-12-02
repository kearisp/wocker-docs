# Змінні середовища

Для кожного проєкту є можливість додати змінні середовища.

```shell
ws config
ws config:get <KEY> [...KEYS]
ws config:set <KEY>=<value> [...KEY2=value2]
ws config:unset <KEY> [...KEYS]
```


## Список

```shell
$ ws config
┌──────────────────────┬──────────────────────────┐
│ KEY                  │ VALUE                    │
├──────────────────────┼──────────────────────────┤
│ APACHE_DOCUMENT_ROOT │ /var/www                 │
├──────────────────────┼──────────────────────────┤
│ EXAMPLE_VALUE        │ test-value               │
└──────────────────────┴──────────────────────────┘
```


## One

```shell
$ ws config:get KEY
```


## Set config

```shell
$ ws config:set KEY=value KEY2=value2
```


## Видалення

```shell
$ ws config:unset KEY1 KEY2
```
