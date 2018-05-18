function captureNumbers(text) {
    let result = [];
    text.map(s => {
        let num = s.match(/\d+/g);
        if (num !== null) {
            result.push(num.join(" "));
        }
    });
    console.log(result.join(" "));
}

captureNumbers(["The300",
    "What is that?",
    'I think it�s the 3rd movie.',
    "Lets watch it at 22:45"]);