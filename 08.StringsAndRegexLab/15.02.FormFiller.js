function fillForm(name, email, phoneNum, text) {
    
    function findOperator(match, groupOne) {
        switch (groupOne){
            case "!": return name;break;
            case "@": return email;break;
            case "+": return phoneNum;break;
        }
    }
    text.forEach(line => {
        line = line.replace(/<([@+!])[A-Za-z]+([@+!])>/g, findOperator);
        console.log(line);
    })
}

fillForm('Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']
);