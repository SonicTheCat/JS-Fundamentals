function cinemaTicketPrice([movieName, dayOfWeek]) {
    movieName = movieName.toLowerCase();
    dayOfWeek = dayOfWeek.toLowerCase();

    let movies = {
            ["the godfather"]: {
                day: {
                    monday: 12, tuesday: 10, wednesday: 15, thursday: 12.50, friday: 15, saturday: 25, sunday: 30
                }
            },
            ["casablanca"]: {
                day: {
                    monday: 8, tuesday: 8, wednesday: 8, thursday: 8, friday: 8, saturday: 10, sunday: 10
                }
            },
            ["schindler's list"]: {
                day: {
                    monday: 8.50, tuesday: 8.50, wednesday: 8.50, thursday: 8.50, friday: 8.50, saturday: 15, sunday: 15
                }
            },
            ["the wizard of oz"]: {
                day: {
                    monday: 10, tuesday: 10, wednesday: 10, thursday: 10, friday: 10, saturday: 15, sunday: 15
                }
            },
    };

let result = 0;
    for (let movie in movies) {

        if (movieName == movie) {

            for (let days in movies[movie]) {

                for (let price in movies[movie][days]) {

                   if (dayOfWeek == price ) {
                       result = movies[movie][days][price];
                       console.log(movies[movie][days][price])
                   }
                }
            }
        }
    }
    if (result == 0 ) {
        console.log("error");
    }
}

cinemaTicketPrice(["The Godfather", "friday"]);
cinemaTicketPrice(["casablanca", "sunday"]);
cinemaTicketPrice(["SOFTUNI", "Nineday"]);
cinemaTicketPrice(["Schindler's LIST", "monday"]);