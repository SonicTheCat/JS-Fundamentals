function arenaTier(input) {
    let gladiators = {};

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "Ave Cesar") {
            break;
        }

        if (input[i].includes(" -> ")) {
            let [gladiator, technique, skill] = input[i].split(" -> ").filter(e => e !== "");
            skill = Number(skill);

            if (!gladiators.hasOwnProperty(gladiator)) {
                gladiators[gladiator] = {};
            }
            if (!gladiators[gladiator].hasOwnProperty(technique)) {
                gladiators[gladiator][technique] = 0;
            }
            let previousSkill = gladiators[gladiator][technique];
            if (previousSkill < skill) {
                gladiators[gladiator][technique] = skill;
            }
        } else {
            let [firstGladiator, vs, secondGladiator] = input[i].split(" ").filter(e => e !== "");
            if (!gladiators.hasOwnProperty(firstGladiator) || !gladiators.hasOwnProperty(secondGladiator)) {
                continue;
            }
            compareTechniques(firstGladiator, secondGladiator, gladiators);
        }
    }

    let sortedGladiators = [...Object.keys(gladiators)].sort().sort((a, b) => sortByTotalSkill(a, b, gladiators));

    for (let gladiator of sortedGladiators) {
        console.log(`${gladiator}: ${[...Object.values(gladiators[gladiator])].reduce((a,b) => a + b)} skill`);
        let sortedTech = [...Object.keys(gladiators[gladiator])]
            .sort()
            .sort((a, b) => sortTechniquesBySkill(a, b, gladiators, gladiator));

        for (let tech of sortedTech) {
            console.log(`- ${tech} <!> ${gladiators[gladiator][tech]}`)
        }
    }


    function sortTechniquesBySkill(techOne, techTwo, gladiators, name) {
        let firstSkillPoints = gladiators[name][techOne];
        let secondSkillPoints = gladiators[name][techTwo];
        return secondSkillPoints - firstSkillPoints;
    }

    function sortByTotalSkill(firstOne, secondOne, gladiators) {
        let totalSkillOne = [...Object.values(gladiators[firstOne])].reduce((a, b) => a + b);
        let totalSkillTwo = [...Object.values(gladiators[secondOne])].reduce((a, b) => a + b);
        return totalSkillTwo - totalSkillOne;
    }

    function compareTechniques(firstOne, secondOne, gladiators) {
        for (let tech of Object.keys(gladiators[firstOne])) {
            if (gladiators[secondOne].hasOwnProperty(tech)) {
                if (gladiators[firstOne][tech] > gladiators[secondOne][tech]) {
                    delete gladiators[secondOne]; break;
                } else {
                    delete gladiators[firstOne]; break;
                }
            }
        }
    }
}

arenaTier([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
]);