const chatBody = document.querySelector(".chat-body");
const chatInput = document.getElementById("text-input");
const form = document.querySelector(".form");
const sumbitBtn = document.querySelector(".submit-btn");

chatInput.addEventListener("input", () => {
    if (!chatInput.value.trim() == "") {
        sumbitBtn.removeAttribute("disabled")
    } else {
        sumbitBtn.setAttribute("disabled", true)
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    renderMessages();
    clearInput();
});

const renderMessages = () => {
    renderUserMessage()
    renderChatBotMessage()
}

const renderUserMessage = () => {
    const userInput = chatInput.value;
    const messageElement = document.createElement("div");
    messageElement.textContent = userInput;
    messageElement.classList.add("user-message");
    chatBody.append(messageElement);
};

const renderChatBotMessage = () => {
    const userInput = chatInput.value;
    const response = getChatBotResponse();
    let botMessageElement = document.createElement("div");
    const faq = document.createElement("div");
    botMessageElement.textContent = response;
    faq.innerHTML = `
    <div> ${responseArr[1]["faq1"]} </div> 
    <div> ${responseArr[1]["faq2"]} </div> 
    <div> ${responseArr[1]["faq3"]} </div> 
    <div> ${responseArr[1]["faq4"]} </div> 
    <div> ${responseArr[1]["faq5"]} </div>`;
    faq.classList.add("faqs")
    botMessageElement.classList.add("bot-message");
    chatBody.append(botMessageElement);
    chatBody.append(faq);

    faq.querySelectorAll("div").forEach((child, index) => {
        child.addEventListener("click", () => {
            botMessageElement.textContent = responseArr[2][`answer${index + 1}`]
            botMessageElement.classList.add("bot-message")
            chatBody.append(botMessageElement)
        })
    })
};

const clearInput = () => {
    chatInput.value = "";
};

const getChatBotResponse = () => {
    return responseArr[0]["hello"];
};
