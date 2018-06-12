function travelPlans(input) {
    let totalMoney = 0;
    let specializeProfesions = ["Programming", "Hardware maintenance", "Cooking", "Translating", "Designing"];
    let averageProfesions = ["Driving", "Managing", "Fishing", "Gardening"];
    let clumsyProfesions = ["Singing", "Accounting", "Teaching", "Exam-Making", "Acting", "Writing", "Lecturing", "Modeling", "Nursing"];
    let extraGold = 0;
    let lessGold = 0;
    for (let i = 0; i < input.length; i++) {
        let [job, money] = input[i].split(" : ").filter(e => e !== "");
        money = +money;
        if (specializeProfesions.includes(job)) {
            if (money >= 200) {
                extraGold++;
                totalMoney += money * 0.80;
                if (extraGold % 2 === 0) {
                    totalMoney += 200;
                }
            }
        } else if (averageProfesions.includes(job)) {
            totalMoney += money;
        } else if (clumsyProfesions.includes(job)) {
            lessGold++;
            if (lessGold % 2 === 0) {
                totalMoney += money * 0.95;
            }
            else if (lessGold % 3 === 0) {
                totalMoney += money * 0.90;
            }
        }
    }
    console.log("Final sum: " + totalMoney.toFixed(2));
    if (totalMoney < 1000) {
        console.log(`Mariyka need to earn ${(1000 - totalMoney).toFixed(2)} gold more to continue in the next task.`)
    } else {
        console.log(`Mariyka earned ${(totalMoney - 1000).toFixed(2)} gold more.`)
    }
}

travelPlans(
    [
        'Programming : 500',
        'Driving : 243.55',
        'Acting : 200',
        'Singing : 100',
        'Cooking : 199',
        'Hardware maintenance : 800',
        'Gardening : 700',
        'Programming : 500',
        ''
    ]);
