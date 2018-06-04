function queryMess(input) {
    let pattern = /(?:\?)?([^?&]+?)=(.+?)(?:&|$)/g;

    for (let line of input) {
        let obj = {};
        let match = null;
        while (match = pattern.exec(line)) {
            let key = match[1];
            let value = match[2];
            key = key.replace(/(\+|%20)+/g, " ").trim();
            value = value.replace(/(\+|%20)+/g, " ").trim();

            if (!obj.hasOwnProperty(key)) {
                obj[key] = [];
            }
            obj[key].push(value)
        }
        let result = "";
        for (let key in obj) {
            result += key + "=[" + obj[key].join(", ") + "]";
        }
        console.log(result)
    }
}

queryMess([
    `foo=%20foo&value=+val&foo+=5+%20+203`,
    `foo=poo%20&value=valley&dog=wow+`,
    `url=https://softuni.bg/trainings/coursesinstances/details/1070`,
    `https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php`
]);