input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . # . .
            . . # . .
            `, 50)
basic.showLeds(`
            . . . . .
            . . . . .
            . # # . .
            . . # . .
            . . # . .
            `, 50)
basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `, 50)
basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            `, 50)
basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `, 50)
basic.showLeds(`
            . . . . .
            . . . . .
            . # . # .
            . . # . .
            . . # . .
            `, 50)
basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            `, 50)
basic.showLeds(`
            . # . # .
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            `, 50)
    }
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.OnceInBackground)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . # . # .
        `, 50)
basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        # # # # #
        `, 50)
basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        # # # # .
        # # # # #
        `, 50)
basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # .
        # # # # #
        `, 50)
basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `, 50)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . # .
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            `, 50)
basic.showLeds(`
            . . . . .
            . # # . .
            # # # # .
            . # . # .
            . . . # .
            `, 50)
basic.showLeds(`
            . . . . .
            . . # . .
            # # . # .
            . # . # .
            . . . # .
            `, 50)
basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . # . # .
            . . . # .
            `, 50)
basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . . # .
            . . . # .
            `, 50)
basic.showLeds(`
            . . . . .
            . . # . .
            . . . # .
            . . . # .
            . . . # .
            `, 50)
basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . . # .
            . . . # .
            `, 50)
basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            . . . # .
            `, 50)
basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            `, 50)
basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `, 50)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showArrow(ArrowNames.North)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 10; index++) {
        basic.showString("A", 5)
basic.showString("B", 5)
basic.showString("C", 5)
basic.showString("D", 5)
    }
    Letter = randint(1, 4)
    if (Letter == 1) {
        basic.showString("A")
    } else if (Letter == 2) {
        basic.showString("B")
    } else if (Letter == 3) {
        basic.showString("C")
    } else if (Letter == 4) {
        basic.showString("D")
    }
})
let Letter = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
