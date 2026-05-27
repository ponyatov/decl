import time
import datetime as dt
from pymodbus.transaction import ModbusRtuFramer
from pymodbus.client import ModbusSerialClient


class Tester:
    def __init__(self, port='/dev/ttyAMA3', baud=115200, timeout=1, timegap=12e-3):
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
            timeout=self.timeout
        )
        assert (self.client.connect())

    def tester(self):
        while True:
            # time
            time.sleep(self.timegap)
            ts = dt.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            # esphome
            di = \
                self.client.read_holding_registers(
                    slave=51, address=0, count=1)
            print(f'{ts} {self.port} {"esphome":<8} di:{di}')
            # drs power
            try:
                answ = self.client.read_input_registers(
                    slave=131, address=0x50, count=1)
                u = answ.registers[0] / 1e1
            except AttributeError:
                u = answ
            try:
                answ = self.client.read_input_registers(
                    slave=131, address=0x60, count=3)
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

# # self.client.read_holding_registers(slave=131, address=0, count=1).registers
# # self.client.read_holding_registers(slave=51, address=0, count=1).registers

# # self.client.write_register(slave=131, address=0, value=0)  # off
# # self.client.write_register(slave=131, address=0, value=1)  # on


# def fault_maker():
#     while True:
#         ts = dt.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
#         # DRS polling
#         time.sleep(TIMEGAP)
#         # ESPhome polling
#         di = \
#             self.client.read_holding_registers(
#                 slave=51, address=0, count=1).registers[0]
#         print(f'{ts} {"esphome":<8} di:{di}')
#         time.sleep(TIMEGAP)


# fault_maker()
