function extractLinks(text) {
    let pattern = /www\.[A-Za-z0-9-]+(\.[a-z]+)+/g;
    text = text.join(" ");
    let result = text.match(pattern);
    if (result !== null) {
        console.log(result.join("\n"));
    }
}
extractLinks([`Join WebStars now for free, at www.web-stars.com`,
    `You can also support our partners:`,
    `Internet - www.internet.com`,
    `WebSpiders - www.webspiders101.com`,
    `Sentinel - www.sentinel.-ko`]);