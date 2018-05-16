function replaceText(text) {
    let html = "<ul>\n";

    for (let word of text) {
        let replaced = word.replace(/&/g, "&amp;")
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

        html += `  <li>${replaced}</li>\n`;
    }

    html += `</ul>\n`;
   return html;
}

console.log(replaceText(['<b>unescaped text</b>', 'normal text']));