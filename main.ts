input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.ForeverInBackground)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        # # # # .
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        # # # # .
        . # . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # . # .
        . # . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . # . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . # .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(input.compassHeading())
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 120)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
