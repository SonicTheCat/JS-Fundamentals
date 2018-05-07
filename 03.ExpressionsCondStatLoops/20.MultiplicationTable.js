function multiplicationTable(num) {
    let html = "<table border=\"1\">\n";
    let mult = 1;

    for (let i = 0; i <= num; i++) {

        html+= i==0?` <tr><th>x</th>`:` <tr><th>${i}</th>`;

        for (let j = mult; j <=num * mult; j+=mult) {

            html += i==0?`<th>${j}</th>`:`<td>${j}</td>`;
        }

        html+=`</tr>\n`;
        if (i>0) {
            mult++
        }
    }
    html+="</table>";
    console.log(html);
}

multiplicationTable(5);