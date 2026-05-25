from pymodbus.client import ModbusTcpClient
from pymodbus.transaction import ModbusRtuFramer, ModbusSocketFramer
import time

das = ModbusTcpClient(
    host='10.130.1.112',      # ICP DAS device IP
    port=10001,               # Default Modbus TCP port
    framer=ModbusRtuFramer,   # Use RTU framing over TCP,
    timeout=1
)

assert (das.connect())

rs0 = ModbusTcpClient(
    host='10.130.1.111',      # ICP DAS device IP
    port=10002,               # Default Modbus TCP port
    framer=ModbusRtuFramer,   # Use RTU framing over TCP,
    timeout=1
)

assert (rs0.connect())

def PRW1_monitor():
    while (True):
        u, i = rs0.read_holding_registers(slave=1, address=1, count=2).registers
        u /= 1e1
        i /= 1e3
        pw = u * i
        print(f'u:{u} i:{i} pw:{pw:.2f}')
        time.sleep(1)

PRW1_monitor()


tcp = ModbusTcpClient(
    host='10.130.1.44',           # ICP DAS device IP
    port=502,                     # Default Modbus TCP port
    # framer=ModbusSocketFramer,  # Use RTU framing over TCP,
    timeout=1
)

assert (tcp.connect())

tcp.read_coils(slave=44,address=0,count=1)

def scan_WBUPS():
    for id in range(1, 254 + 1):
        try:
            print(id, das.read_holding_registers(
                slave=id, address=0, count=1).registers)
        except AttributeError:
            pass


scan_WBUPS()

# while (True):
print(das.read_coils(slave=43, address=0, count=1).registers)
n = 0
while (True):
    print(n); n += 1
    try: das.read_discrete_inputs(slave=43, address=0, count=1)
    except e: print(e)
    # time.sleep(1)


def Koncony_read():
    while (True):
        print(das.read_discrete_inputs(slave=43, address=0, count=1).bits)
        time.sleep(1)
Koncony_read()

das.read_discrete_inputs(slave=43, address=0, count=1).bits

das.write_coils(slave=43, address=0, values=[True])
das.write_coil(slave=43, address=0, value=False)

tcp.read_discrete_inputs(slave=43, address=0, count=1).bits
tcp.write_coil(slave=43, address=0, value=True)

def Koncony_coil():
    das.write_coil(slave=43, address=0, value=True)
    time.sleep(.1)
    das.write_coil(slave=43, address=0, value=False)
Koncony_coil()

print(tcp.read_discrete_inputs(slave=43, address=0, count=1))

das.close()
