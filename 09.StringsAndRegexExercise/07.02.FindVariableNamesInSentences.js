function findVariableNames(text) {
    let pattern = /\b_{1}([A-Za-z0-9]+)\b/g;
    let match = pattern.exec(text);
    let names = [];

    while(match !== null){
        names.push(match[1]);
        match = pattern.exec(text);
    }
    console.log(names.join(","));

}
findVariableNames("The _id and _age variables are both integers.");