function result(input) {
    let regexCountry = /\b[A-Z]{1}[a-z]{1,}[A-Z]{1}\b/m;
    let regexNumber = /([0-9]{3}(\,|\.)?[0-9]*)/gm;
    let country = regexCountry.exec(input[3])[0];

    let changed = country.substring(Number(input[0]), Number(input[1]) + 1);
    country = country.replace(changed, input[2]);
    country = country.replace(country[country.length - 1]
        , country[country.length - 1].toLowerCase());

    let match = input[3].match(regexNumber)
    if(!match){
        console.log("Invalid Input!")
        return;
    }
    let cityName = '';
    for (let num of match) {
        cityName += String.fromCharCode(Math.ceil(num))
    }
    cityName = cityName.replace(cityName[0], cityName[0].toUpperCase())

    console.log(`${country} => ${cityName}`)
}