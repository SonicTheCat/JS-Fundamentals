function assProp(input) {
    let propOne = input[0];
    let propTwo = input[2];
    let propThree = input[4];


    let obj = {
        [propOne]: `${input[1]}`,
        [propTwo]: `${input[3]}`,
        [propThree]: `${input[5]}`,
    };
console.log(obj);
}

assProp(['name', 'Pesho', 'age', '23', 'gender', 'male']);
