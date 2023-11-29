# Domains

## Description



```shell
ws domains
ws domain:add <domain> [...domains]
ws domain:remove <domain> [...domains]
ws domain:clear
```

## Domains list

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

## Add domain

```shell
ws domain:add example.workspace
```

## Remove domain

```shell
ws domain:remove example.workspace
```

