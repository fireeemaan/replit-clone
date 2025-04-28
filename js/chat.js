$(document).ready(function () {
   $(".chat-bubble .user").text(getPrompt());
});

function getPrompt() {
   return localStorage.getItem("prompt") || "No prompt found.";
}
