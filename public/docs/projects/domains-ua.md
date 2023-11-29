# Домени

## Опис

Логіка доменів працює на базі образу `nginxproxy/nginx-proxy`.
При наявності [env](/project/config) змінних `VIRTUAL_HOST` та `VIRTUAL_PORT` у контейнері, [proxy](/plugins/proxy) буде автоматично перенаправляти запит у відповідний контейнер.

Команди для керування списком доменів створені для зручного керування вмістом env змінної `VIRTUAL_HOST`.

```shell
ws domains
ws domain:add <domain> [...domains]
ws domain:remove <domain> [...domains]
ws domain:clear
```


## Список доменів

```shell
$ ws domains
┌─────────────────────┐
│ Domain              │
├─────────────────────┤
│ example.workspace   │
├─────────────────────┤
│ example-2.workspace │
└─────────────────────┘
```

```shell
$ ws config:get VIRTUAL_HOST
┌──────────────┬───────────────────────────────────────┐
│ KEY          │ VALUE                                 │
├──────────────┼───────────────────────────────────────┤
│ VIRTUAL_HOST │ example.workspace,example-2.workspace │
└──────────────┴───────────────────────────────────────┘
```


## Додавання домену

```shell
ws domain:add example.workspace
```

```text
127.0.0.1 example.workspace
```

## Видалення домену

```shell
ws domain:remove example.workspace
```

## Видалення всіх доменів

```shell
ws domain:clear
```
