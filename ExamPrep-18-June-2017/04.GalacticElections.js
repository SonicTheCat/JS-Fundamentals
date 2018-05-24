function calculateElections(input) {
    // Най- противната задача на света! :D Взе ми здравето! Enjoy
    let elections = new Map();
    let voters = 0;

    for (let obj of input) {
        let [system, candidate, votes] = [obj.system, obj.candidate, obj.votes];
        voters += votes;

        if (!elections.has(obj.system)) {
            elections.set(system, new Map());
        }
        if (!elections.get(system).has(candidate)) {
            elections.get(system).set(candidate, 0);
        }
        let votesSoFar = elections.get(system).get(candidate);
        elections.get(system).set(candidate, votesSoFar + votes);
    }

    let winnerByStar = new Map();
    for (let [star, insideMap] of elections) {

        let winner = [...insideMap.keys()]
            .sort((can1, can2) => elections.get(star).get(can2) - elections.get(star).get(can1))[0];
        if (!winnerByStar.has(winner)) {
            winnerByStar.set(winner, new Map());
        }
        let reduceVote = [...insideMap.values()].reduce((a, b) => a + b);
        winnerByStar.get(winner).set(star, reduceVote);
    }

    let sumVotes = new Map();
    for (let [winner, insideMap] of winnerByStar) {
        let reduceVote = [...insideMap.values()].reduce((a, b) => a + b);
        sumVotes.set(winner, reduceVote);
    }
    let sortWinners = [...sumVotes.keys()].sort((a, b) => sumVotes.get(b) - sumVotes.get(a));

    if (sortWinners.length === 1) {
        for (let [winner, insideMap] of winnerByStar) {
            console.log(`${winner} wins with ${sumVotes.get(winner)} votes`);
            console.log(`${winner} wins unopposed!`);
            return;
        }
    }
    let firstPlace = sortWinners.shift();
    let secondPlace = sortWinners.shift();

    if (voters / sumVotes.get(firstPlace) <= 2) {
        console.log(`${firstPlace} wins with ${sumVotes.get(firstPlace)} votes`);
        console.log(`Runner up: ${secondPlace}`);

        let runnerUpSortStars = new Map([...winnerByStar.get(secondPlace)]);
        [...runnerUpSortStars.keys()]
            .sort((a, b) => runnerUpSortStars.get(b) - runnerUpSortStars.get(a))
            .forEach(e => console.log(`${e}: ${winnerByStar.get(secondPlace).get(e)}`));

    } else {
        let calcPercentOne = Math.floor((sumVotes.get(firstPlace) / voters) * 100);
        let calcPercentTwo = Math.floor((sumVotes.get(secondPlace) / voters) * 100);
        console.log(`Runoff between ${firstPlace} with ${calcPercentOne}% and ${secondPlace} with ${calcPercentTwo}%`);
    }
}

calculateElections([
    {system: 'Tau', candidate: 'Flying Shrimp', votes: 150},
    {system: 'Tau', candidate: 'Space Cow', votes: 100},
    {system: 'Theta', candidate: 'Space Cow', votes: 10},
    {system: 'Sigma', candidate: 'Space Cow', votes: 200},
    {system: 'Sigma', candidate: 'Flying Shrimp', votes: 75},
    {system: 'Omicron', candidate: 'Flying Shrimp', votes: 50},
    {system: 'Omicron', candidate: 'Octocat', votes: 75}
]);