basic.showIcon(IconNames.EigthNote)
basic.forever(function() {
    if(input.isGesture(Gesture.TiltLeft)) {
       music.playMelody("C5 B A G A B C5 - ", 120 )
       basic.showString("Feliz!")
    } else if ( input.isGesture(Gesture.TiltRight)) {
      music.playMelody("E D C D E E - " , 100) 
      basic.showString("Triste!")
    } else if ( input.isGesture(Gesture.LogoDown)) {
         for (let index = 0; index < 4 ; index++) {
             music.playtone(880, music.beat(BeatFraction.Sixteenth))
             music.rest(music.beat(BeatFraction.Sixteenth))
         }
         basic.showString("Techno!")
    } else {
        basic.showIcon(IconNames.Heart)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
})
