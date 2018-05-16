function count(target, text) {
    let count = 0;
    let indexOfTarget = text.indexOf(target);

    while(indexOfTarget != -1){
        count ++;
        indexOfTarget =  text.indexOf(target, indexOfTarget + 1);
    }
    console.log(count);
}

count('the', 'The quick brown fox jumps over the lay dog.');