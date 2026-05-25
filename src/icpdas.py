# intensive polling over ispdas

IP = '10.130.1.112'
PORT = 10001
IFACE = 'enp0s25'

# configure
print(f'sudo ip route add {IP}/32 dev {IFACE}')

from pymodbus.client import ModbusTcpClient
from pymodbus.transaction import ModbusRtuFramer, ModbusSocketFramer

icpdas = ModbusTcpClient(
    host=IP,      # ICP DAS device IP
    port=PORT,               # Default Modbus TCP port
    framer=ModbusRtuFramer,   # Use RTU framing over TCP,
    timeout=1
)
