function writeUsername(input) {
    let result = [];

    for (let email of input) {
        let [name, domain] = email.split("@");
        let username = name + ".";
        let splitDomain = domain.split(".");
        splitDomain.forEach(e => username += e[0]);
        result.push(username);
    }
    console.log(result.join(", "));
}
writeUsername(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);