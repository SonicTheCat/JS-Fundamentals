function extractText(text) {
    let collectResult =[];
    let firstIndex = text.indexOf("(");

    while(firstIndex != -1){
        let secondIndex = text.indexOf(")", firstIndex + 1);
        if (secondIndex === -1) break;
        collectResult.push(text.substring(firstIndex+1, secondIndex));
        firstIndex = text.indexOf("(", secondIndex + 1);
    }
    console.log(collectResult.join(", "))
}

extractText('xaxaxaxax');