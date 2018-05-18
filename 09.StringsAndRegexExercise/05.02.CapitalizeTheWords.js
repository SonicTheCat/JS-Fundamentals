function capitalizeWords(text) {
 console.log(text.toLowerCase().split(" ").map(w => w[0].toUpperCase() + w.substr(1)).join(" "));
}

capitalizeWords("Was that Easy? tRY thIs onE for SiZe!");