function aggTable(input) {
    let towns = [];
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
       let currTown = input[i].split("|").filter(e => e !="");
       towns.push(currTown[0].trim());
       sum +=  (Number)(currTown[1].trim());
    }

    console.log(towns.join(", ") + "\n" + sum);

}

aggTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);