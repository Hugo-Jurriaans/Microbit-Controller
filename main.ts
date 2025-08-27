input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(90)
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        # # # # #
        `)
})
CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0xff0000)
CutebotPro.colorLight(CutebotProRGBLight.RGBR, 0x0000ff)
radio.setGroup(420)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(111)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(112)
    } else if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(113)
    } else if (input.isGesture(Gesture.LogoUp)) {
        radio.sendNumber(114)
    } else {
        radio.sendNumber(115)
    }
})
