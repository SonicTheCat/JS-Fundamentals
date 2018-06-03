function gameOfEpic(data, battles) {
    let kingdoms = {};

    for (let line of data) {
        let [currKingdom, general, army] = [line.kingdom, line.general, line.army];

        if (!kingdoms.hasOwnProperty(currKingdom)) {
            kingdoms[currKingdom] = {WON:0, LOST:0};
        }
        if (!kingdoms[currKingdom].hasOwnProperty(general)) {
            kingdoms[currKingdom][general] = {army: 0, wins: 0, looses: 0};
        }
        let armySoFar = kingdoms[currKingdom][general].army;
        kingdoms[currKingdom][general].army = armySoFar + army;
    }

    for (let battle of battles) {
        let [aKingdom, aGeneral, dKingdom, dGeneral] = battle;
        if (aKingdom !== dKingdom) {
            if (kingdoms[aKingdom][aGeneral].army > kingdoms[dKingdom][dGeneral].army) {
                battleField(aKingdom, aGeneral, dKingdom, dGeneral, kingdoms);
            } else if (kingdoms[dKingdom][dGeneral].army > kingdoms[aKingdom][aGeneral].army) {
                battleField(dKingdom, dGeneral, aKingdom, aGeneral, kingdoms);
            }
        }
    }

    let winnerKingdom = [...Object.keys(kingdoms)].sort((a, b) => findWinnerKingdom(a, b, kingdoms))[0];
    console.log("Winner: " + winnerKingdom);
    delete kingdoms[winnerKingdom].WON;
    delete kingdoms[winnerKingdom].LOST;
    let sortedArmies = [...Object.keys(kingdoms[winnerKingdom])].sort((a, b) => findBiggestArmy(a, b, kingdoms, winnerKingdom));

    for (let general of sortedArmies) {
        console.log("/\\general: " + general);
        console.log("---army: " + kingdoms[winnerKingdom][general].army);
        console.log("---wins: " + kingdoms[winnerKingdom][general].wins);
        console.log("---losses: " + kingdoms[winnerKingdom][general].looses);
    }

    function findBiggestArmy(generalOne, generalTwo, kingdoms, winner) {
        let fistArmy = kingdoms[winner][generalOne].army;
        let secondArmy = kingdoms[winner][generalTwo].army;
        return secondArmy - fistArmy
    }

    function findWinnerKingdom(kingdomA, kingdomB, kingdoms) {
        let firstKingdomWins = kingdoms[kingdomA].WON;
        let secondKingdomWins = kingdoms[kingdomB].WON;

        if (firstKingdomWins === secondKingdomWins) {
            let kingdomOneLooses = kingdoms[kingdomA].LOST;
            let kingdomTwoLooses = kingdoms[kingdomB].LOST;

            if (kingdomOneLooses === kingdomTwoLooses) {
                return kingdomA.localeCompare(kingdomB);
            }
            return kingdomOneLooses - kingdomTwoLooses;
        }
        return secondKingdomWins - firstKingdomWins;
    }

    function battleField(winnerK, winnerG, looserK, looserG, result) {
        result[winnerK].WON = result[winnerK].WON + 1;
        let generalWins = result[winnerK][winnerG].wins;
        result[winnerK][winnerG].wins = generalWins + 1;
        result[winnerK][winnerG].army = Math.floor(result[winnerK][winnerG].army * 1.10);

        result[looserK].LOST = result[looserK].LOST + 1;
        let generalLooses = result[looserK][looserG].looses;
        result[looserK][looserG].looses = generalLooses + 1;
        result[looserK][looserG].army = Math.floor(result[looserK][looserG].army * 0.90)
    }
}

gameOfEpic(
    [ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
);