function sendMessage() {
    const userInput = document.getElementById("userInput");
    const chatBox = document.getElementById("chatbox");
    console.log(chatBox);

    if (userInput.value === "") {
        return;
    }

    const message = document.createElement("div");
    message.className = "message";
    message.textContent = " " + userInput.value;
    chatBox.appendChild(message);

    userInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight; 
}