function tenisNotebook(data) {
    let pages = {};

    for (let i = 0; i < data.length; i++) {
        let line = data[i].split("|");
        let color = line[0];
        if (!pages.hasOwnProperty(color)) {
            pages[color] = {age: -1, name: "", opponents: [], win: 1, loss: 1};
        }
        if (line[1] === "win" || line[1] === "loss") {
            line[1] === "win" ? pages[color].win = pages[color].win + 1 : pages[color].loss = pages[color].loss + 1;
            pages[color].opponents.push(line[2]);
        } else if (line[1] === "name") {
            pages[color].name = line[2];
        } else if (line[1] === "age") {
            pages[color].age = line[2];
        }
    }

    for (let color in pages) {
        if (pages[color].name === "" || pages[color].age === -1) {
            delete pages[color];
            continue;
        }
        pages[color].opponents.sort();
    }
    let sortedColors = [...Object.keys(pages)].sort();

    let notebook = {};
    for (let color of sortedColors) {
       notebook[color] = {age: 0, name: "", opponents: [], rank:''};
       notebook[color].age = pages[color].age;
       notebook[color].name = pages[color].name;
       notebook[color].opponents = pages[color].opponents;
       let rank = pages[color].win / pages[color].loss;
       notebook[color].rank = rank.toFixed(2);
    }
    console.log(JSON.stringify(notebook));
}

tenisNotebook([
    'red|name|kiko',
    'red|win|Vladko',
    'blue|age|12',
    'green|age|13',
    'green|win|gosho',
    'red|age|12',
    'green|name|Pesho',
    'green|win|ico',
    'green|win|Gosho',
    'green|win|qfkata',
    'green|win|stamat',
    'green|win|petko',
    'green|win|mariya',
]);
