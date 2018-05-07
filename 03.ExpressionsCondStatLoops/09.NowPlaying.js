function whichTrackIsOn(track) {
    let songName = track[0];
    let songAuthor = track[1];
    let duration = track[2];

    console.log(`Now Playing: ${songAuthor} - ${songName} [${duration}]`)
}

whichTrackIsOn(['Number One', 'Nelly', '4:09']);