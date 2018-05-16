function splitByReg(text) {
    let pattern = /[\s()\t\n;.,'' ]+/gm;
    let result = text.split(pattern);

    console.log(result.join("\n"));
}

splitByReg('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');