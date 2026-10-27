const input = document.getElementById("userInput");
const welcomeScreen = document.getElementById("welcomeScreen");
const chatContainer = document.getElementById("chatContainer");
const sendButton = document.querySelector(".send-btn");


/* =========================
   ENTER TO SEND
========================= */

input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});


/* =========================
   SEND MESSAGE
========================= */

function sendMessage() {

    const message = input.value.trim();

    if (message === "") {
        return;
    }


    // Hide welcome screen
    welcomeScreen.style.display = "none";


    // Show chat container
    chatContainer.style.display = "block";


    // Add user message
    addUserMessage(message);


    // Clear input
    input.value = "";


    // Disable send button temporarily
    sendButton.disabled = true;


    // Show typing animation
    showTyping();


    // Temporary response
    setTimeout(() => {

        removeTyping();

        const response = getTemporaryResponse(message);

        addBotMessage(response);

        sendButton.disabled = false;

        input.focus();

    }, 1000);

}


/* =========================
   USER MESSAGE
========================= */

function addUserMessage(message) {

    const messageHTML = `

        <div class="message-row">

            <div class="message-avatar user-avatar">
                C
            </div>

            <div class="message-content">

                <div class="message-name">
                    You
                </div>

                <div class="message-text">
                    ${escapeHTML(message)}
                </div>

                <div class="message-time">
                    ${getCurrentTime()}
                </div>

            </div>

        </div>

    `;

    chatContainer.innerHTML += messageHTML;

    scrollToBottom();

}


/* =========================
   BOT MESSAGE
========================= */

function addBotMessage(message) {

    const messageHTML = `

        <div class="message-row">

            <div class="message-avatar bot-avatar">
                ✦
            </div>

            <div class="message-content">

                <div class="message-name">
                    CharanGPT
                </div>

                <div class="message-text">
                    ${escapeHTML(message)}
                </div>

                <button
                    class="copy-btn"
                    onclick="copyMessage(this)"
                >
                    📋 Copy
                </button>

                <div class="message-time">
                    ${getCurrentTime()}
                </div>

            </div>

        </div>

    `;

    chatContainer.innerHTML += messageHTML;

    scrollToBottom();

}


/* =========================
   TYPING ANIMATION
========================= */

function showTyping() {

    const typingHTML = `

        <div class="message-row" id="typing">

            <div class="message-avatar bot-avatar">
                ✦
            </div>

            <div class="message-content">

                <div class="message-name">
                    CharanGPT
                </div>

                <div class="typing">

                    <span></span>
                    <span></span>
                    <span></span>

                </div>

            </div>

        </div>

    `;

    chatContainer.innerHTML += typingHTML;

    scrollToBottom();

}


function removeTyping() {

    const typing = document.getElementById("typing");

    if (typing) {
        typing.remove();
    }

}


/* =========================
   COPY MESSAGE
========================= */

function copyMessage(button) {

    const message =
        button.parentElement
            .querySelector(".message-text")
            .innerText;

    navigator.clipboard.writeText(message);

    button.innerText = "✓ Copied";

    setTimeout(() => {

        button.innerText = "📋 Copy";

    }, 1500);

}


/* =========================
   NEW CHAT
========================= */

function newChat() {

    chatContainer.innerHTML = "";

    chatContainer.style.display = "none";

    welcomeScreen.style.display = "flex";

    input.value = "";

    input.focus();

}


/* =========================
   SUGGESTION BUTTON
========================= */

function setSuggestion(text) {

    input.value = text;

    input.focus();

}


/* =========================
   SCROLL TO BOTTOM
========================= */

function scrollToBottom() {

    setTimeout(() => {

        chatContainer.scrollTop =
            chatContainer.scrollHeight;

    }, 50);

}


/* =========================
   CURRENT TIME
========================= */

function getCurrentTime() {

    const now = new Date();

    return now.toLocaleTimeString([], {

        hour: "2-digit",
        minute: "2-digit"

    });

}


/* =========================
   TEMPORARY AI RESPONSES
========================= */

function getTemporaryResponse(message) {

    const text = message.toLowerCase();


    if (text.includes("hello") || text.includes("hi")) {

        return "Hello! 👋 I'm CharanGPT. How can I help you today?";

    }


    if (text.includes("java")) {

        return "Java is an object-oriented programming language. I can help you learn Java concepts, solve coding problems, and build projects.";

    }


    if (text.includes("leetcode")) {

        return "Great choice! Start with easy array and string problems, then gradually learn HashMap, two pointers, recursion, and dynamic programming.";

    }


    if (text.includes("project")) {

        return "Awesome! 🚀 We can build a realistic full-stack project step by step. Tell me which technology you want to use.";

    }


    return "I'm currently running in demo mode. My real AI brain will be connected soon! 🤖";

}


/* =========================
   SECURITY
========================= */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}