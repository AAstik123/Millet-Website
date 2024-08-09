var lang = 'eng';
var sound_eng = new Audio('./open_eng.wav');
var sound_hin = new Audio('./open_hin.mp3');
var tts_hin = new Audio('./tts_hin.mp3');
var tts_eng = new Audio('./tts_eng.mp3');
var eng_playing = false;
var hin_playing = false;

setTimeout(() => {
    sound_eng.play();
}, 1000);


function change_language() {
    lang = lang == 'eng' ? 'hin' : 'eng';
    document.getElementById('lang').innerHTML = lang == 'eng' ? 'English' : 'हिंदी';
    document.getElementById(lang).style.display = 'block';
    document.getElementById(lang == 'eng' ? 'hin' : 'eng').style.display = 'none';
    if (lang == 'eng') {
        sound_hin.pause();
        sound_hin.currentTime = 0;
        sound_eng.play();
    } else {
        sound_eng.pause();
        sound_eng.currentTime = 0;
        sound_hin.play();
    }
}

document.getElementById('change_lang').onclick = function() {
    change_language();
}

document.addEventListener("keypress", function onEvent(event) {
    
    console.log(event)
    sound_eng.pause();
    sound_hin.pause();
    if (event.key === " ") {
event. preventDefault();
        if(lang == 'eng') {
            if(!eng_playing) {
                tts_hin.pause();
                tts_eng.play();
                eng_playing = true;
            } else {
                tts_eng.pause();
                eng_playing = false;
            }
        } else {
            if(!hin_playing) {
                tts_eng.pause();
                tts_hin.play();
                hin_playing = true;
            } else {
                tts_hin.pause();
                hin_playing = false;
            }
        }
    } else if (event.key == '1') {
        change_language();
    } else if (event.key == '2') {
        tts_eng.pause();
        tts_hin.pause();
        tts_eng.currentTime = 0;
        tts_hin.currentTime = 0;
    }
});

const chatbox = document.getElementById('chatbox');
        const userInput = document.getElementById('userInput');
        const sendButton = document.getElementById('sendButton');

        // Function to add messages to the chatbox
        function addMessage(text, sender) {
            const message = document.createElement('div');
            message.classList.add('message', sender);
            message.textContent = text;
            chatbox.appendChild(message);
            chatbox.scrollTop = chatbox.scrollHeight;
        }
	
 window.onload = () => {
            const openingMessage = "Hello! How can I assist you today?";
            addMessage(openingMessage, 'bot');
const openingMessage2 = "Please type '-' instead of space";
            addMessage(openingMessage2, 'bot');
        };

        // Event listener for the send button
        sendButton.addEventListener('click', () => {
            const userText = userInput.value.trim();
            if (userText) {
                addMessage(userText, 'user'); // Add user's message
                userInput.value = '';

                // Constant bot reply
                const botReply = "Thanks for you query. Your query has been forwarded to AISG-43, the Creator of Millet-o-Mania.You will be responded shortly.";
                addMessage(botReply, 'bot'); // Add bot's constant reply
            }
        });

        // Allow pressing Enter to send the message
        userInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                sendButton.click();
            }
        });