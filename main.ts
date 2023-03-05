function Forward () {
    pins.servoSetPulse(AnalogPin.P12, 500)
    pins.servoSetPulse(AnalogPin.P13, 2500)
}
function stop () {
    pins.servoSetPulse(AnalogPin.P12, 1500)
    pins.servoSetPulse(AnalogPin.P13, 1500)
}
function v () {
    pins.servoSetPulse(AnalogPin.P12, 2500)
    pins.servoSetPulse(AnalogPin.P13, 500)
}
makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    serial.writeValue("x", makerbit.irButton())
})
function _2 () {
    pins.servoSetPulse(AnalogPin.P13, 2500)
    pins.servoSetPulse(AnalogPin.P12, 1500)
}
function _ () {
    pins.servoSetPulse(AnalogPin.P12, 500)
    pins.servoSetPulse(AnalogPin.P13, 1500)
}
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.Keyestudio)
basic.forever(function () {
    if (makerbit.irButton() == 96) {
        Forward()
    } else if (makerbit.irButton() == 218) {
        _()
    } else if (makerbit.irButton() == 216) {
        _2()
    } else if (makerbit.irButton() == 104) {
        v()
    } else if (makerbit.irButton() == 88) {
        stop()
    }
})
