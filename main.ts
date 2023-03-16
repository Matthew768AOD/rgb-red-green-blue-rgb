let strip = neopixel.create(DigitalPin.P16, 69, NeoPixelMode.RGB) // 8 je počet ledek 

// strip.showColor(neopixel.hsl(14, 63, 21)) // barva/sytost barvy/jas
//strip.showRainbow(0, 359)

strip.setPixelColor(2, neopixel.hsl(14, 63, 21))  // pro rozsvícení jen jedné ledky
strip.show()

// basic.forever(function() {
    

// strip.rotate(1)
// strip.show()
// basic.pause(469)


function ping(
    trig: DigitalPin,
    echo: DigitalPin,
    maxCmDistance = 500): number {
        pins.setPull(trig, PinPullMode.PullNone)
        pins.digitalWritePin(trig, 0)
        control.waitMicros(2)
        pins.digitalWritePin(trig, 1)
        control.waitMicros(10)
        pins.digitalWritePin(trig, 0)
        let duration = pins.pulseIn(echo, PulseValue.High, 1/340 * 10) //

        return duration
}
    

basic.forever(function(){
console.logValue("d", ping(DigitalPin.P8, DigitalPin.P15))
})