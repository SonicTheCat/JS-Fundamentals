function cinemaTicketPrice([movieName, dayOfWeek]) {
    movieName = movieName.toLowerCase();
    dayOfWeek = dayOfWeek.toLowerCase();

    let errorDay = false;
    let arrDays = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
    for (let day of arrDays) {
        if (dayOfWeek == day) {
            errorDay  = true;
        }
    }
     if (!errorDay) {
        console.log("error");
        return;
     }

    let price = 0;

    if (movieName=="the wizard of oz" ) {
        price = dayOfWeek == "saturday" || dayOfWeek == "sunday"  ? 15 : 10;
    } else if (movieName == "casablanca") {
        price =  dayOfWeek == "saturday" || dayOfWeek == "sunday"  ? 10 : 8;
    } else if (movieName == "schindler's list") {
        price =  dayOfWeek == "saturday" || dayOfWeek == "sunday"  ? 15 : 8.50;
    } else if (movieName == "the godfather") {
        price =  dayOfWeek == "wednesday" || dayOfWeek == "friday"  ? 15 : 12.50;
        if (dayOfWeek=="monday" ) {
            price = 12;
        } else if(dayOfWeek =="tuesday"){
            price = 10;
        } else if (dayOfWeek == "saturday") {
            price = 25;
        } else if (dayOfWeek == "sunday") {
            price = 30;
        }
    }

    if (price == 0 ) {
        console.log("error");
    } else {
        console.log(price);
    }
}

cinemaTicketPrice(["The Godfather", "friday"]);
cinemaTicketPrice(["casablanca", "sunday"]);
cinemaTicketPrice(["SOFTUNI", "Nineday"]);
cinemaTicketPrice(["Schindler's LIST", "monday"]);