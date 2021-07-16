document.querySelector("button[type='button']").addEventListener("click", textToAudio() );

function textToAudio() {
	let inputMessage = document.querySelector('#text-to-speech').value;

	let speechObj = new SpeechSynthesisUtterance();
        speechObj.lang = '';
	speechObj.text = msg;
        speechObj.volume = 1;
        speechObj.rate = 1;
        speechObj.pitch = 1;

	window.speechSynthesis.speak(speechObj);
}