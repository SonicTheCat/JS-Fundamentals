function assignProp([propOne, valueOne, propTwo, valueTwo, propThree, valueThree]) {
    return {
        [propOne]: valueOne,
        [propTwo]: valueTwo,
        [propThree]: valueThree
    };
}

console.log(assignProp(['name', 'Pesho', 'age', '23', 'gender', 'male']));