datalogger.onLogFull(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
})
input.onButtonPressed(Button.B, function () {
    datalogger.deleteLog()
    steps = 0
    basic.showIcon(IconNames.Skull)
    datalogger.setColumnTitles(
    "Time",
    "Acceleration",
    "Step"
    )
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})
let steps = 0
basic.showIcon(IconNames.Happy)
loops.everyInterval(100, function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        basic.showIcon(IconNames.Yes)
        datalogger.log(
        datalogger.createCV("Time", input.runningTime() / 1000),
        datalogger.createCV("Acceleration", input.acceleration(Dimension.Strength)),
        datalogger.createCV("Step", steps)
        )
        steps += 1
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
