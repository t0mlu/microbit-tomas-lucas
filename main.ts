let i = 0
let bclicked = 0
let atimes = 0
function interact(interval: number) {
    
    basic.clearScreen()
    i = 1
    while (i < interval + 1) {
        basic.showString("" + ("" + seq(i)))
        basic.pause(100)
        basic.clearScreen()
        i += 1
    }
}

function seq(n: number): number {
    return n * (n + 1)
}

function numElements() {
    
    while (bclicked < 1) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("A")
            basic.clearScreen()
            atimes += 1
            basic.showString("" + ("" + atimes))
        } else if (input.buttonIsPressed(Button.B)) {
            basic.showString("B")
            bclicked += 1
        }
        
        basic.pause(40)
    }
    basic.clearScreen()
    interact(atimes)
}

function showIcon() {
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showIcon(IconNames.SmallHeart)
    }
    basic.clearScreen()
    basic.showString("seq")
    basic.clearScreen()
}

basic.forever(function on_forever() {
    
    music.setBuiltInSpeakerEnabled(true)
    atimes = 0
    bclicked = 0
    showIcon()
    basic.showString("A=n B=ex")
    numElements()
    basic.pause(500)
})
