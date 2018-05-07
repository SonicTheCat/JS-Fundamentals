function ageFilter(minAge, personOneName, personOneAge, personTwoName, personTwoAge) {
        let personOne = {name: personOneName, age: personOneAge};
        let personTwo = {name: personTwoName, age: personTwoAge};

        if(personOne.age >=minAge){
                console.log(personOne);
        }
        if(personTwo.age >= minAge){
            console.log(personTwo);
        }
}

ageFilter(12, 'Ivan', 15, 'Asen', 9);