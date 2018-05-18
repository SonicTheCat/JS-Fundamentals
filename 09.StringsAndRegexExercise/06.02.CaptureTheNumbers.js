function captureNumbers(text) {
   console.log(text.join("").match(/\d+/g).join(" "));
}

captureNumbers(["The 300",
    "What is that?",
    'I think it�s the 3rd movie.',
    "Lets watch it at 22:45"]);