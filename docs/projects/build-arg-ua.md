# Аргументи збірки

```shell
ws build-args
ws build-arg:get <KEY> [...KEYS]
ws build-arg:set <KEY>=<value> [...KEY2=value]
ws build-arg:unset <KEY> [...KEYS]
```


## Список

```shell
$ ws build-args
┌──────────────┬──────────┐
│ KEY          │ VALUE    │
├──────────────┼──────────┤
│ PHP_VERSION  │ 8.2      │
├──────────────┼──────────┤
│ NODE_VERSION │ v18.16.0 │
└──────────────┴──────────┘
```
