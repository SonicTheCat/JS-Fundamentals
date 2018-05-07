function findLastDayInAMonth([day,month,year]) {
    let date = new Date(year,month-1,day); // In JS months start count from 0... an array!

    date.setDate(date.getDate() - day);

    console.log(date.getDate());
}
findLastDayInAMonth([16,8,2015]);