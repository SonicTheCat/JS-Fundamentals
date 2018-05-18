function findVariableNames(text) {
    let pattern = /\b_{1}[A-Za-z0-9]+\b/g;
    let result = text.match(pattern);

    console.log(result.map(n => n.substr(1)).join(","));

}
findVariableNames("The _id and _age variables are both integers.");