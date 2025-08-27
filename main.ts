radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 154) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
})
radio.setGroup(420)
radio.setTransmitPower(7)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(113)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(112)
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(111)
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
    } else if (input.isGesture(Gesture.LogoUp)) {
        radio.sendNumber(114)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
    } else if (input.isGesture(Gesture.Shake)) {
        radio.sendNumber(116)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
    } else if (input.isGesture(Gesture.LogoDown)) {
        radio.setGroup(89)
        radio.sendNumber(117)
        basic.pause(1000)
        radio.setGroup(420)
    } else {
        radio.sendNumber(115)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(200)
    }
})
