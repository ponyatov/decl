import time
import datetime as dt
from pymodbus.transaction import ModbusRtuFramer
from pymodbus.client import ModbusSerialClient


class Tester:
    def __init__(self, port='/dev/ttyAMA3', baud=115200, timeout=1, timegap=14e-3):
        self.port = port
        self.baud = baud
        self.timeout = timeout
        self.timegap = timegap
        self.client = ModbusSerialClient(
            port=self.port,
            baudrate=self.baud,
            bytesize=8,
            parity='N',
            stopbits=1,
            framer=ModbusRtuFramer,
            timeout=self.timeout,
            rtscts=True
        )
        assert (self.client.connect())

    def read(self, id, addr, count=1):
        return self.client.read_holding_registers(slave=id, address=addr, count=count)

    def write(self, id, addr, value):
        self.client.write_register(slave=id, address=addr, value=value)

    def input(self, id, addr, count=1):
        return self.client.read_input_registers(slave=id, address=addr, count=count)

    def tester(self):
        while True:
            # time
            ts = dt.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            # esphome
            time.sleep(self.timegap)
            try:
                answ = self.read(51, 0)
                di = answ.registers[0]
            except AttributeError:
                di = answ
            print(f'{ts} {self.port} {"esphome":<8} di:{di}')
            # drs input
            time.sleep(self.timegap)
            try:
                answ = self.input(131, 0x50)
                u = answ.registers[0] / 1e1
            except AttributeError:
                u = answ
            # drs output
            time.sleep(self.timegap)
            try:
                answ = self.input(131, 0x60, 3)
                v, i, t = answ.registers
                v /= 1e2
                i /= 1e2
                t /= 1e1
            except AttributeError:
                v = answ
                i = t = ''
            print(f'{ts} {self.port} {"drs":<8} u:{u} v:{v} i:{i} t:{t}')


ama3 = Tester('/dev/ttyAMA3')
usb = Tester('/dev/ttyUSB0')

ama3.tester()
# usb.tester()

# ama3.write(131, 0, 1)

# self.client.read_holding_registers(slave=131, address=0, count=1).registers
# self.client.read_holding_registers(slave=51, address=0, count=1).registers

# self.client.write_register(slave=131, address=0, value=0)  # off
# self.client.write_register(slave=131, address=0, value=1)  # on
