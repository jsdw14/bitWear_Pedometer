datalogger.onLogFull(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
})
let steps = 0
steps = 0
datalogger.setColumnTitles(
"Time",
"Acceleration",
"Step"
)
loops.everyInterval(100, function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        datalogger.log(
        datalogger.createCV("Time", input.runningTime()),
        datalogger.createCV("Acceleration", input.acceleration(Dimension.Strength)),
        datalogger.createCV("Step", steps)
        )
        steps += 1
        basic.pause(500)
    } else {
        datalogger.log(
        datalogger.createCV("Time", input.runningTime()),
        datalogger.createCV("Acceleration", input.acceleration(Dimension.Strength)),
        datalogger.createCV("Step", steps)
        )
    }
})
