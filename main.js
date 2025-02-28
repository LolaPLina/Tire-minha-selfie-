var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
document.getElementById("textbox").innerHTML="";
recognition.start();
}


recognition.onresult=function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript; 
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);

    if(Content == "tire minha selfie") {
        console.log("tirando selfie...");
        speak()
    }
}

function speak() {
    var synth = window.speechSynthesis;                         //API que converte texto em fala
    //speakData = document.getElementById("textbox").value;       //função da API que converte texto em fala
    faleisso = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(faleisso);
    synth.speak(utterThis);                                     //função predefinida da API 
    Webcam.attach(camera);

    setTimeout(function() {
        takeSelfie();
        save();
    },5000)
}

camera = document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function takeSelfie() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="selfieImage" src="'+data_uri+'"/>';
    })
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfieImage").scr;
    link.href = image;
    link.click();
}