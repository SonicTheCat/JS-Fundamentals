function employeeData(data) {
   let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([A-Za-z0-9 \-]+)$/;
   let result = [];

    for (let employee of data) {
        let match = pattern.exec(employee);
        if (match === null) continue;

        result.push(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`);
    }
    console.log(result.join("\n"));
}

employeeData(['Jonathan - 2000 - Manager',
'Peter- 1000- Chuck',
'George - 1000 - Team Leader'
]);