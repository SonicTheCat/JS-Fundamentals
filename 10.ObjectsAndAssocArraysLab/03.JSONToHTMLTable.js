function JSONToHTMLTable (json) {

    let arr = JSON.parse(json);

    let html = '<table>\n';

    html += '  <tr>';
    for (let key of Object.keys(arr[0])) {
        html += `<th>${key}</th>`;
    }
    html += '</tr>\n';

    for (let obj of arr) {
        html += '  <tr>';
        for (let key in obj) {
            let propValue = String(obj[key]);
            html += `<td>${escapeHtml(propValue)}</td>`
        }
        html += '</tr>\n'
    }

    function escapeHtml(text) {
        let keyValues = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        };
        return text.replace(/[&<>"']/g, ch => keyValues[ch]);
    }

    html += '</table>';

    console.log(html);
}
JSONToHTMLTable('[{"name":"Pesho","score":443},{"name":"Gosho","score":205}]');