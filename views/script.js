var timerInterval;
var typingInterval;


function startTimer() {
  // Clear any existing interval to prevent multiple timers running simultaneously
  clearInterval(timerInterval);
    // Set the initial time to 2 minutes (120 seconds)
    var timeLeft = 120;

    // Display the initial time
    displayTime(timeLeft);

    // Update the timer every second
    timerInterval = setInterval(function() {
        // Decrease the time by 1 second
        timeLeft--;

        // Display the updated time
        displayTime(timeLeft);

        // Check if the timer has reached zero
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}

function displayTime(seconds) {
    // Calculate minutes and seconds
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;

    // Add leading zeros if necessary
    var formattedMinutes = String(minutes).padStart(2, '0');
    var formattedSeconds = String(remainingSeconds).padStart(2, '0');

    // Display the time in the format MM:SS
    document.getElementById('timer').textContent = formattedMinutes + ':' + formattedSeconds;
}
 
 // Function to populate the dropdown with available voices
 function populateVoices() {
  var voices = speechSynthesis.getVoices();
  var voicesDropdown = document.getElementById('voices');
  
  // Clear existing options
  voicesDropdown.innerHTML = '';

  // Populate the dropdown with available voices
  voices.forEach(function(voice, index) {
      var option = document.createElement('option');
      option.value = index;
      option.textContent = voice.name;
      voicesDropdown.appendChild(option);
  });
}

// Event listener to populate the dropdown when voices are loaded
speechSynthesis.onvoiceschanged = function() {
  populateVoices();
};

// Initial array of texts
var originalTexts = [
      "How would you handle a technical objection from a potential customer?",
      "How do you approach qualifying leads and understanding customer needs?",
      "Describe a successful deal you worked on. What role did you play in securing the sale?",
      "How do you communicate technical information to non-technical customers?",
      "Give an example of a challenging customer interaction and how you resolved it.",
      "What strategies do you use to build and maintain customer relationships?",
      "How do you collaborate with sales and development teams to ensure customer success?",
      "Can you provide an example of a successful collaboration between sales and engineering?",
      "How do you handle feedback or feature requests from customers and communicate them to the development team?",
      "How do you stay updated on industry trends and changes in our product?",
      "If a customer asks a technical question beyond your knowledge, how do you handle it?",
      "Can you outline your approach to delivering an effective sales demo?",
      "How do you tailor a demo to address the specific needs of a customer?",
      "Describe a situation where you had to quickly adapt to changes or challenges in a sales environment.",
      "How do you handle competing priorities and manage your time effectively?"
      // Add more texts as needed
  ];

// Create a copy of the original array to avoid modifying it directly
var texts = originalTexts.slice();

function readRandomText() {
  // // Stop and reset the timer and animation if they are already running
  // clearInterval(timerInterval);

  // clearInterval(typingInterval);
  // // Start the timer when the button is clicked

  //  // Clear the speech synthesis queue
  //  speechSynthesis.cancel();

  startTimer();
  // Get the selected voice index from the dropdown
  var selectedVoiceIndex = document.getElementById('voices').value;

  // Get a random text to read
  var randomIndex = Math.floor(Math.random() * texts.length);
  var selectedText = texts[randomIndex];

  // Set the value of the textarea to the selected question
  document.getElementById('questionTextarea').value = selectedText;

  // Create a new SpeechSynthesisUtterance
  var utterance = new SpeechSynthesisUtterance(selectedText);

  // Set the selected voice for speech synthesis
  var voices = speechSynthesis.getVoices();
  utterance.voice = voices[selectedVoiceIndex];

  // Speak the selected text
  speechSynthesis.speak(utterance);

  // Get the textarea element
  var textarea = document.getElementById('questionTextarea');

  // Clear the textarea before typing the new question
  textarea.value = '';

  // Start typing animation
  typingAnimation(selectedText, textarea, selectedVoiceIndex);
}

// Function to simulate typing animation
function typingAnimation(text, textarea, voiceIndex) {
  var index = 0;
  var typingInterval = setInterval(function() {
      // Add one character at a time
      textarea.value += text[index++];
      if (index === text.length) {
          clearInterval(typingInterval);
          // Create a new SpeechSynthesisUtterance
          // var utterance = new SpeechSynthesisUtterance(text);
          // // Set the selected voice for speech synthesis
          // var voices = speechSynthesis.getVoices();
          // utterance.voice = voices[voiceIndex];
          // // Speak the selected text
          // speechSynthesis.speak(utterance);
      }
  }, 50); // Adjust typing speed as needed
}