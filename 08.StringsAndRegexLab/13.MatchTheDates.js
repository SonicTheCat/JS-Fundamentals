function validDate(text) {
    let pattern = /(\b\d{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let result = pattern.exec(text);

    while(result != null){
        let [date, day, month, year] = result;
        console.log(`${date} (Day: ${day}, Month: ${month}, Year: ${year})`);

        result = pattern.exec(text);
    }
}

validDate(`1-Jan-1999 is a valid date.
So is 01-July-2000.
I am an awful liar, by the way – Ivo, 28-Sep-2016.
`);
