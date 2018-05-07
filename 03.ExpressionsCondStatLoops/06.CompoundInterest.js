function compoundInterest(input) {

    let principal = Number(input[0]); // заем
    let interest = Number(input[1] / 100); // лихвен %
    let period = 12 / Number(input[2]); // преизчисляване на лихва - пъти в годината
    let time = Number(input[3]); // срок за погасяване на заема

    //дължима сума
    let total = principal * Math.pow((1 + (interest/period)),(period*time));

    console.log(total.toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);