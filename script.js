let speech = new SpeechSynthesisUtterance();


//add voices to the select element
//voice change event
let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    
    speech.voice = voices[0];

    //voiceSelect.innerHTML = ""; // clear previous options

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

// Change voice when user selects
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});