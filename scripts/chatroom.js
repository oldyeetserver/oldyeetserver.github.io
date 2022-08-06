var rawchat = {
  "aJw": {"name": "max", "message": "hello"}, "aJd": {"name": "mig", "message": "hi"}
}
var chat = JSON.stringify(rawchat)

const name = generateName()

function randomInt(multiplicator) {
  return Math.round(Math.random() * multiplicator);
} 

function stringify(json) {
  return JSON.stringify(json)
}

function loadMessages() {
const chatlog = JSON.parse(chat);
let listedMessages = []
let returnMessage = []

for (let messageid in chatlog) {
    let finalMessage = `${chatlog[messageid]["name"]}: ${chatlog[messageid]["message"]}<br>`;
    listedMessages.push(messageid);
    console.log(listedMessages);
    returnMessage.push(finalMessage);
}
return `${returnMessage}`
}


function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

function generateName() {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789123456789';
  const prefix = ["Schlaue", "Große", "Kleine", "Prägnante", "Schnelle", "Schöne", "Fliegende"];
  const suffix = ["Möwe", "Giraffe", "Robbe", "Ameise", "Spinne", "Katze", "Amsel"];
  
  const random = Math.floor(Math.random() * 7);
  return `${prefix[random]} ${suffix[random]}`;
}

function saveMessage(message) {

}

function sendMessage() {
  const textfield = `${document.getElementById("textfield").value}`;
  const badWords = ["stinker", "stfu"]
  const contains = badWords.some(element => {
    if (textfield.indexOf(element) !== -1) {
      return true}; return false});

  if (textfield != undefined) {
    document.getElementById("textfield").value = "";

    if (!contains) {
      document.getElementById("messages").innerHTML = `${loadMessages()} ${name}: ${textfield}`
    }
    else {
      console.log(`your message: '${textfield}' contains a bad word!`);
}}}

function onload() {
  document.getElementById("messages").innerHTML = "loadMessages()"
  console.log(generateName());
}