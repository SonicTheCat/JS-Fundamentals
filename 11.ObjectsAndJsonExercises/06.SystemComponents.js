function sortSystemComponents(input) {
    let collectSystems = new Map();

    for (let line of input) {
        let [system, component, subComp] = line.split(" | ");

        if (!collectSystems.has(system)) {
            collectSystems.set(system, new Map());
        }
        if (!collectSystems.get(system).has(component)) {
            collectSystems.get(system).set(component, []);
        }
        collectSystems.get(system).get(component).push(subComp);
    }
    let sortSystemMap = [...collectSystems.keys()].sort((a, b) => sortSystems(a, b));
    for (let system of sortSystemMap) {
        console.log(system);

        let sortComponentMap = [...collectSystems.get(system).keys()].sort((a, b) => sortComponents(system, a, b));
        for (let component of sortComponentMap) {
            console.log(`|||${component}`);
            collectSystems.get(system).get(component).forEach(e => console.log(`||||||${e}`))
        }
    }
    function sortSystems(a, b) {
        if (collectSystems.get(a).size != collectSystems.get(b).size) {
            return collectSystems.get(b).size - collectSystems.get(a).size;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    }
    function sortComponents(system, a, b) {
        return collectSystems.get(system).get(b).length - collectSystems.get(system).get(a).length;
    }
}

sortSystemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'Lambda | CoreQ | A43',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);