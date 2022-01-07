var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function voice_gif()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.voice_gif();
}

recognition.onresult = function run (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if (Content =="take my selfie") 
    {
        console.log("taking selfie --- ");
        speak();
    }
}


function speak()
{
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 2000);
}

camera = document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });