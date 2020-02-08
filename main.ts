input.onButtonPressed(Button.AB, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.All)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M2)
})
input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M1)
})
basic.forever(function () {
	
})
