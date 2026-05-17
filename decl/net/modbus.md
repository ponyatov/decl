# modbus

```decl
protocol modbus {}
```

## RTU over [[serial]]

```decl
protocol mrtu:modbus { over=uart|rs485|tcp }
```

## TCP

```decl
protocol mtcp:modbus { over=tcp }
```
