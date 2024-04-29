function Left () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
}
buttonClicks.onButtonDown(buttonClicks.AorB.B, function () {
    Backward()
})
function Forward () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
}
buttonClicks.onButtonUp(buttonClicks.AorB.B, function () {
    Stop()
})
buttonClicks.onButtonUp(buttonClicks.AorB.A, function () {
    Stop()
})
buttonClicks.onButtonDown(buttonClicks.AorB.A, function () {
    Forward()
})
function Right () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
}
function Stop () {
    Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor2)
}
function Backward () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
}
let distance = 0
radio.setGroup(1)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    serial.writeValue("x", distance)
    led.plotBarGraph(
    distance,
    20
    )
    if (distance < 10 && distance != 0) {
        serial.writeValue("wall", 1)
        Backward()
        basic.pause(1000)
        Left()
        basic.pause(randint(1000, 2000))
    } else {
        Forward()
    }
})
