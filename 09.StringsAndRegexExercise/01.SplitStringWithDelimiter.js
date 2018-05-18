function splitString(text, delimiter) {
    console.log(text.split(delimiter).join("\n"));
}

splitString(`One-Two-Three-Four-Five`, `-`);