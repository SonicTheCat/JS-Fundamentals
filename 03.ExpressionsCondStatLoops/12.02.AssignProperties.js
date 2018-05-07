function assignProp([propOne, valueOne, propTwo, valueTwo, propThree, valueThree]) {

    console.log((JSON.parse(`{ "${propOne}": "${valueOne}", "${propTwo}": "${valueTwo}", "${propThree}": "${valueThree}" }`)));
}

assignProp(['name', 'Pesho', 'age', '23', 'gender', 'male']);