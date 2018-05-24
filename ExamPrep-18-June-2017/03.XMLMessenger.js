function sendMessage(input) {
    let pattern = /^<message[\sa-zA-Z0-9\."=]+>(.+|[\r\n]+)<\/message>$/gs;
    let isValid = pattern.test(input);
    if (!isValid) {
        console.log("Invalid message format");
        return;
    }

    let sender = "";
    let recipient = "";
    pattern = /([a-z]+)="([A-Z0-9a-z\. ]+)"/g;
    let attributes = null;
    while (attributes = pattern.exec(input)) {
        if (attributes[1] === "to") {
            recipient = attributes[2];
        }
        if (attributes[1] === "from") {
            sender = attributes[2];
        }
    }
    if (sender === "" || recipient === "") {
        console.log("Missing attributes");
        return;
    }
    let result = "<article>\n";
    result += `  <div>From: <span class="sender">${sender}</span></div>\n`;
    result += `  <div>To: <span class="recipient">${recipient}</span></div>\n`;
    result += `  <div>\n`;

    pattern = />(.+|[\r\n]?)</gs;
    let message = pattern.exec(input);
    message = message[1].split("\n");
    for (let msg of message) {
        result+=`    <p>${msg}</p>\n`;
    }
    result += `  </div>\n`;
    result += "</article>";

    console.log(result);
}

sendMessage("<message from=\"John Doe\" to=\"Alice\">Not much, just chillin. How about you?</message>");
sendMessage(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old
Let's go out for a beer</message>`);
sendMessage("<message from=\"Alice\" timestamp=\"1497254112\">Same old, same old</message>");
sendMessage("<message from=\"Hillary\" to=\"Edward\" secret:true>VGhpcyBpcyBhIHRlc3Q</message>");