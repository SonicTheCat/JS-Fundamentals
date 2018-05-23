function jsonTable(jsonData) {
    let html = "<table>\n";

    for (let line of jsonData) {
        line = JSON.parse(line);
        html += "  <tr>\n";
        html += `    <td>${htmlEscape(line.name)}</td>\n`;
        html += `    <td>${htmlEscape(line.position)}</td>\n`;
        html += `    <td>${Number(line.salary)}</td>\n`;
        html += "  <tr>\n";
    }

    html += "</table>\n";
    console.log(html);

    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
jsonTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}',
]);