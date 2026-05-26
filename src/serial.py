SERIAL = '/dev/ttyAMA3'
BAUDRATE = 115200

from pymodbus.client import ModbusSerialClient
from pymodbus.transaction import ModbusRtuFramer

icpdas = ModbusSerialClient(
    port=SERIAL,           # последовательный порт
    baudrate=BAUDRATE,    # скорость передачи
    bytesize=8,           # 8 бит данных
    parity='N',           # без четности
    stopbits=1,           # 1 стоп-бит
    framer=ModbusRtuFramer,  # RTU framing
    timeout=1
)

print(icpdas)
assert (icpdas.connect())

icpdas.read_holding_registers(slave=131, address=0, count=1).registers
icpdas.write_register(slave=131, address=0, value=0) # off
icpdas.write_register(slave=131, address=0, value=1) # on
