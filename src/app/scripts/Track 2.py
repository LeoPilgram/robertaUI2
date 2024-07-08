import sys
 
from pygame import mixer
 
 
 
 
 
VOLUME = 0.9
 
mixer.init()
 
sound = mixer.Sound('audio/happy-asian-travel-long-10707.mp3')
 
sound.set_volume(VOLUME)
 
sound.play()
 
while mixer.get_busy():
 
    continue
 
sys.exit()