
    const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesContainer = document.querySelector('.chat-messages');
const clearButton = document.querySelector('.clear-button');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        // Send the message to the server (replace with your backend logic)
        sendMessageToServer(message);

        // Display the user's message
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.textContent = message;
        messagesContainer.appendChild(userMessage);

        // Simulate a bot response (replace with actual bot logic)
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot-message');
        botMessage.textContent = 'Bot: Hello, how can I help you today?';
        messagesContainer.appendChild(botMessage);

        messageInput.value = '';
    }
});

function sendMessageToServer(message) {
    // Temporary logic to simulate a response
    setTimeout(() => {
        const botResponse = 'Bot: You sent: ' + message;
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot-message');
        botMessage.textContent = botResponse;
        messagesContainer.appendChild(botMessage);
    }, 1000); // Simulate a 1-second delay for the response
}

clearButton.addEventListener('click', () => {
    messagesContainer.innerHTML = '';
});
