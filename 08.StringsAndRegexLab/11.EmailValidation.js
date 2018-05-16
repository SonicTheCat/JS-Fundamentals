function emailValidation(email) {
    let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+/;
    let result = regex.test(email);

    if (result) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}

emailValidation("valid@email.bg");
emailValidation("invalid@emai1.bg");