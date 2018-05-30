function requestValidator(input) {
    let lastLine = input.pop();

    // не е тествана в джъджа

    for (let i = 0; i < input.length; i += 3) {
        let methodPattern = /Method:\s(GET|POST|PUT|DELETE)$/g;
        let credentialPattern = /Credentials:\s(Basic|Bearer)\s([A-Za-z0-9]+)$/g;
        let contentPattern = /Content:\s([0-9A-Za-z.]+)$/g;

        let method = methodPattern.exec(input[i]);
        let credential = credentialPattern.exec(input[i + 1]);
        let content = contentPattern.exec(input[i + 2]);

        if (!method || !credential || !content) {
            console.log("Response-Code:400");
            continue;
        }
        method = method[1];
        content = content[1];

        let authorizationType = credential[1];
        let token = credential[2];
        if (method !== "GET" && authorizationType === "Basic") {
            console.log(`Response–Method:${method}&Code:401`);
            continue;
        }

        let hashPattern = /([0-9]+)([A-Za-z])/g;
        let hash = hashPattern.exec(lastLine);
        let flag = false;
        while (hash) {
            let number = Number(hash[1]);
            let letter = new RegExp(`${(hash[2])}`, 'g');
            let count = 0;
            let match = null;

            while (match = letter.exec(token)) {
                count++;
            }

            if (count === number) {
                flag = true;
                console.log(`Response-Method:${method}&Code:200&Header:${token}`);
                break;
            }
            hash = hashPattern.exec(lastLine);
        }
        if (!flag) {
            console.log(`Response–Method:${method}&Code:403`);
        }
    }
}

requestValidator([
    'Method: PUT',
    'Credentials: Bearer as9133jsdbhjslkfqwkqiuwjoxXJIdahefJAB',
    'Content: users.asd/1782452$278///**asd123',
    'Method: POST',
    'Credentials: Bearer 028591u3jtndkgwndskfjwelfqkjwporjqebhas',
    'Content: Johnathan',
    'Method: DELETE',
    'Credentials: Bearer 05366u3jtndkgwndssfsfgeryerrrrrryjihvx',
    'Content: This.is.a.sample.content',
    '2e5g'
]);

