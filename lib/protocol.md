class Protocol {
    RFC:opt<int>
    ISO:opt<int>
}

class Mosquitto: Software {}
class MQTT: Protocol { broker=default<Mosquitto> }

class MODBUS: Protocol { variants=RTU|TCP }
