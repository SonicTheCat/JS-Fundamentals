function angularParse(input) {
    let finalElements = {};
    let waitingElements = [];

    for (let i = 0; i < input.length; i++) {
        let pattern = /\$([a-z]+)='([^']+)'(?:$|&app='([^']+)')/g;
        let app;
        let line = pattern.exec(input[i]);
        if (line === null) continue;

        if (line[1] === "app") {
            app = line[2];
            waitingElements.push(app);
        }
        else if (line.length > 3) {
            app = line[3];
            if (!finalElements.hasOwnProperty(app)) {
                finalElements[app] = {
                    controllers: [],
                    models: [],
                    views: [],
                }
            }
            let mvc = line[1] + "s";
            finalElements[app][mvc].push(line[2]);
        }
    }

    let arrOfApps = [...Object.keys(finalElements)];
    for (let key of arrOfApps) {
        let flag = true;
        for (let element of waitingElements) {
            if (key === element) {
                flag = false;
                break;
            }
        }
        if (flag)
            delete finalElements[key];
    }
    let sortedApps = [...Object.keys(finalElements)].sort((a,b) => funcSort(a,b,finalElements));
    let result = {};
    for (let element of sortedApps) {
       result[element] = {controllers: [], models: [], views: []};
       result[element].controllers = finalElements[element].controllers.sort((a,b) => a.localeCompare(b));
       result[element].models = finalElements[element].models.sort((a,b) => a.localeCompare(b));
       result[element].views = finalElements[element].views.sort((a,b) => a.localeCompare(b));
    }
    console.log(JSON.stringify(result));

    function funcSort(firstApp, secondApp, obj) {
        let firstControllerSize = obj[firstApp].controllers.length;
        let secondControllerSize = obj[secondApp].controllers.length;
        if (firstControllerSize === secondControllerSize) {
            let firstModelSize = obj[firstApp].models.length;
            let secondModelSize = obj[secondApp].models.length;

            return firstModelSize - secondModelSize;
        }
        return secondControllerSize - firstControllerSize;
    }
}
angularParse([
    `$app='MyApp'`,
    `$controller='My Controller'&app='MyApp'`,
    `$model='My Model'&app='MyApp'`,
    `$view='My View'&app='MyApp'`
]);

