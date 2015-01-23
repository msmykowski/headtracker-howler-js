var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

var dogBarkingBuffer = null;
// Fix up prefixing
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();


oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

// sound.type = 0;
// sound.frequency.value = 500;
// sound.start();
//
//

var videoInput = document.getElementById('inputVideo');
var canvasInput = document.getElementById('inputCanvas');
var htracker = new headtrackr.Tracker();
htracker.init(videoInput, canvasInput);
htracker.start();

var sound = new Howl ({
  urls: ['Kygo - Firestone.mp3']
}).play();




document.addEventListener("headtrackingEvent", function(event){
    sound.pos3d(-(event.x + 1.0)/3);
    console.log((event.x + 1.0)/3);  
});
