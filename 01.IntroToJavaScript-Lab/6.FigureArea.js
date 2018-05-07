function figureArea(w,h,W,H) {

    let figureOne = W*H;
    let figureTwo = w*h;

    let commonArea = Math.min(H,h) * Math.min(w,W);

    let result = (figureOne + figureTwo) - commonArea;

    console.log(result);
}

figureArea(13, 2, 5, 8);