function primeCkecker(num) {

    if(num<=1){
        console.log(false);
        return;
    }
    let isPrime = true;
    for (let i = 2; i < Math.sqrt(num); i++) {
       if (num%i==0){
           isPrime= false;
       }
    }
    console.log(isPrime)
}

primeCkecker(16);

