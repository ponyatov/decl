# intensive polling over ispdas

IP = '10.130.2.112' # icpdas
# IP = '10.130.2.11' # hub

PORT = 10001
IFACE = 'enp0s25'

SERIAL = '/dev/ttyAMA3'
BAUDRATE = 115200

TIMEGAP = 1.0

from pymodbus.client import ModbusTcpClient
from pymodbus.transaction import ModbusRtuFramer

icpdas = ModbusTcpClient(
    host=IP,      # ICP DAS device IP
    port=PORT,               # Default Modbus TCP port
    framer=ModbusRtuFramer,   # Use RTU framing over TCP,
    timeout=1
)

print(icpdas)
assert (icpdas.connect())

icpdas.read_holding_registers(slave=131, address=0, count=1).registers
icpdas.read_holding_registers(slave=51, address=0, count=1).registers

icpdas.write_register(slave=131, address=0, value=0) # off
icpdas.write_register(slave=131, address=0, value=1) # on

import datetime as dt
import time

TIMEGAP = 15e-3
print(f'TIMEGAP:{TIMEGAP*1e3}ms')

def fault_maker():
    while True:
        ts = dt.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        # DRS polling
        u = icpdas.read_input_registers(
            slave=131, address=0x50, count=1).registers[0]
        u /= 1e1
        v, i, t = \
            icpdas.read_input_registers(
                slave=131, address=0x60, count=3).registers
        v /= 1e2
        i /= 1e2
        t /= 1e1
        print(f'{ts} {"drs":<8} u:{u} v:{v} i:{i} t:{t}')
        time.sleep(TIMEGAP)
        # ESPhome polling
        di = \
            icpdas.read_holding_registers(
                slave=51, address=0, count=1).registers[0]
        print(f'{ts} {"esphome":<8} di:{di}')
        time.sleep(TIMEGAP)

fault_maker()
