function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


var trigger = [
	["hi","hey","hello"],
	["how are you", "how is life", "how are things"],
	["what are you doing", "what is going on"],
	["how old are you"],
	["who are you", "are you human", "are you bot", "are you human or bot"],
	["who created you", "who made you"],
	["your name please",  "your name", "may i know your name", "what is your name"],
	["i love you"],
	["happy", "good"],
	["bad", "bored", "tired"],
	["help me", "tell me story", "tell me joke"],
	["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
	["bye", "good bye", "goodbye", "see you later"],
  ["when will i get my vehicle"],
  ["how to book a vehicle", "book car", "book bike", "book a car", "book a bike"],
  ["when was this company established", "when was zien established", "when was ZIEN established",
  "when was ZIEN founded", "when was zien founded", "when was ZIEN founded"],
  ["service", "how to book service", "how to book service for my car", "how to book service for my bike",
  "car chceckup", "bike checkup"],
  ["what can you do", "what else can you do"],
  ["book test drive", "test drive", "book doorstep test drive", "doorstep test drive"],
  ["in how many days will i get to test drive"],
  ["when will i get my refund"],
  ["is cash on delivery available", "cash on delivery", "can i pay through cash", "can i pay cash"],
  ["name three things you really want to recommend to me", "recommend me something"],
  ["what is the mileage of car"],
  ["how many months of warrenty for car", "How many months of warrenty for bike?"],
  ["what are you selling"],
  ["how would this car impact my car insurance premiums"],
  ["is emi available", "is EMI available"]
];
var reply = [
	["Hi","Hey","Hello"],
	["Fine", "Pretty well", "Fantastic"],
	["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],
	["I am 1 day old"],
	["I am just a bot", "I am a bot. What are you?"],
	["ZIEN", "My God"],
	["I am nameless", "I don't have a name"],
	["I love you too", "Me too"],
	["Have you ever felt bad?", "Glad to hear it"],
	["Why?", "Why? You shouldn't!", "Try watching TV"],
	["I will", "What about?"],
	["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
	["Bye", "Goodbye", "See you later"],
  ["contact us through 'Reach-out to us!' page"],
  ["go to buy page and select your vehicle"],
  ["2021"],
  ["go to Service page"],
  ["I can help you with queries related to ZIEN company"],
  ["go to Doorstep test drive page!"],
  ["5-6 days"],
  ["it usually takes 7-11 days."],
  ["yes. cash on delivery is available"],
  ["go to 'Recommendations' page"],
  ["depends on car"],
  ["usually 3-5 years. Please contact us for more queries.."],
  ["we are selling 'Automobiles'"],
  ["please contact us.."],
  ["yes EMI is available"]
];


var alternative = ["I cannot understand..", "I am not sure..", "I did not get you..", "Oops,I didn't catch that. Please be clear..."];
document.querySelector("#input").addEventListener("keypress", function(e){
	var key = e.which || e.keyCode;
	if(key === 13){ //Enter button
		var input = document.getElementById("input").value;
		document.getElementById("user").innerHTML = `${input}`;
		output(input);
	}
});


function output(input){
	try{
		var product = input + "=" + eval(input);
	} catch(e){
		var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and
		text = text.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
		if(compare(trigger, reply, text)){
			var product = compare(trigger, reply, text);
		} else {
			var product = alternative[Math.floor(Math.random()*alternative.length)];
		}
	}
	document.getElementById("chatbot").innerHTML = `${product}`;
	speak(product);
	document.getElementById("input").value = ""; //clear input value
}
function compare(arr, array, string){
	var item;
	for(var x=0; x<arr.length; x++){
		for(var y=0; y<array.length; y++){
			if(arr[x][y] == string){
				items = array[x];
				item =  items[Math.floor(Math.random()*items.length)];
			}
		}
	}
	return item;
}
function speak(string){
	var utterance = new SpeechSynthesisUtterance();
	utterance.voice = speechSynthesis.getVoices().filter(function(voice){return voice.name == "Agnes";})[0];
	utterance.text = string;
	utterance.lang = "en-US";
	utterance.volume = 1; //0-1 interval
	utterance.rate = 1;
	utterance.pitch = 2; //0-2 interval
	speechSynthesis.speak(utterance);
}
