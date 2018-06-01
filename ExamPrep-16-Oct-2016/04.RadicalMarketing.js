function radicalMarketing(input) {
    let users = new Set();
    let facebook = {};

    for (let i = 0; i < input.length; i++) {
        let splitInput = input[i].split("-");

        if (splitInput.length === 1) {
            users.add(splitInput[0])
        } else {
            let firstPerson = splitInput[0];
            let secondPerson = splitInput[1];
            if (firstPerson === secondPerson) {
                continue;
            }
            if (!users.has(firstPerson) || !users.has(secondPerson)) {
                continue;
            }
            if (!facebook.hasOwnProperty(firstPerson)) {
                facebook[firstPerson] = {followers: new Set(), following: new Set()};
            }
            if (!facebook.hasOwnProperty(secondPerson)) {
                facebook[secondPerson] = {followers: new Set(), following: new Set()};
            }
            facebook[firstPerson].following.add(secondPerson);
            facebook[secondPerson].followers.add(firstPerson);
        }
    }

    let firstUser = [...Object.keys(facebook)].sort((a, b) => sortBook(a, b, facebook))[0];
    if (firstUser !== undefined) {
        console.log(firstUser);
        let i = 0;
        facebook[firstUser].followers.forEach(f => {
            console.log(++i + ". " + f)
        });
    } else {
        console.log([...users][0]);
    }

    function sortBook(personA, personB, book) {
        let firstPersonFollowers = book[personA].followers.size;
        let secondPersonFollowers = book[personB].followers.size;

        if (firstPersonFollowers === secondPersonFollowers) {
            let personOneFollowing = book[personA].following.size;
            let personTwoFollowing = book[personB].following.size;

            if (personOneFollowing === personTwoFollowing) {
                for (let user of users) {
                    if (personA === user) {
                        return -1;
                    } else if (personB === user) {
                        return 1;
                    }
                }
            }
            return personTwoFollowing - personOneFollowing;
        }
        return secondPersonFollowers - firstPersonFollowers;
    }
}

radicalMarketing([
    'A',
    'B',
    'C',
    'D',
    'A-B',
    'B-A',
    'C-A',
    'D-A'
]);