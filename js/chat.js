$(document).ready(function () {
   $(".chat-bubble .user").text(getPrompt());
   console.log("Prompt loaded from localStorage:", getPrompt());
});

function getPrompt() {
   return localStorage.getItem("prompt") || "No prompt found.";
}
