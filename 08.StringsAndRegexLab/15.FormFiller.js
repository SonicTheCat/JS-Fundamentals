function fillForm(name, email, phoneNum, arr) {
    for (let row of arr) {
        row = row.replace(/<![A-Za-z]+!>/g, name);
        row = row.replace(/<@[A-Za-z]+@>/g, email);
        row = row.replace(/<\+[A-Za-z]+\+>/g, phoneNum);

       console.log(row);
    }
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