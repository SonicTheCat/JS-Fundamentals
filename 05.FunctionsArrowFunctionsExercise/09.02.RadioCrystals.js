function radioCrystals(input) {
    let operations = ['Cut', 'Lap', 'Grind', 'Etch', 'X-ray'];
    let targetThickness = Number(input[0]);
    let chunks = input.slice(1).map(Number);
    for(let chunk of chunks) {
        let operationsLog = [`Processing chunk ${chunk} microns`];
        for (let operation of operations) {
            if (chunk == targetThickness) break;
            [chunk, operationsLog] = processChunk(operation, chunk, operationsLog);
            // operationsLog.push(chunk);
        }
        operationsLog.push(`Finished crystal ${chunk} microns`);
        console.log(operationsLog.join('\n'));
    }

    function processChunk(operation, chunk, operationsLog) {
        let count = 0;
        switch (operation) {
            case 'Cut':
                while(chunk * 0.25 >= targetThickness) {
                    chunk *= 0.25;
                    count++;
                }
                [chunk, operationsLog] = updateLog(chunk, operation, count, operationsLog);
                break;
            case 'Lap':
                while(chunk * 0.8 >= targetThickness) {
                    chunk *= 0.8;
                    count++;
                }
                [chunk, operationsLog] = updateLog(chunk, operation, count, operationsLog);
                break;
            case 'Grind':
                while(chunk - 20 >= targetThickness) {
                    chunk -= 20;
                    count++;
                }
                [chunk, operationsLog] = updateLog(chunk, operation, count, operationsLog);
                break;
            case 'Etch':
                while(chunk - 2 >= targetThickness || chunk - 1 == targetThickness) {
                    chunk -= 2;
                    count++;
                }
                [chunk, operationsLog] = updateLog(chunk, operation, count, operationsLog);
                break;
            case 'X-ray':
                while(chunk + 1 <= targetThickness) {
                    chunk++;
                    count++;
                }
                [chunk, operationsLog] = updateLog(chunk, operation, count, operationsLog);
                break;
        }
        return [chunk, operationsLog];
    }

    function updateLog(chunk, operation, count, operationsLog) {
        if (count > 0) {
            operationsLog.push(`${operation} x${count}`);
            if (operation != 'X-ray') {
                operationsLog.push('Transporting and washing');
                chunk = Math.floor(chunk);
            }
        }
        return [chunk, operationsLog];
    }
}

radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);