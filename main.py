pins.servo_set_pulse(AnalogPin.P12, 500)
pins.servo_set_pulse(AnalogPin.P13, 2500)

def on_forever():
    if pins.digital_read_pin(DigitalPin.P0) == 0:
        pass
basic.forever(on_forever)
