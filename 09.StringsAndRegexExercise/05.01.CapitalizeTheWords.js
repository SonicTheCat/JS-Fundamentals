capitalizeWords = text =>
    console.log(text.split(" ")
        .map(word =>
            word.substring(0, 1).toUpperCase() + word.substring(1, word.length).toLowerCase())
        .join(" "));


capitalizeWords("Was that Easy? tRY thIs onE for SiZe!");