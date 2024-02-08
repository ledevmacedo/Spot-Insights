import history from "../data/history.json";

export function topList() {
    let mili = 0
    let artist = ""

    for (let i = 0; i < history.length; i++) {

        // mili += history[i]["ms_played"]
    }
    return
}


export function Top100(name) {
    let MILLISECONDS = 0;
    let allTime100 = [];
    let songs = [];
    let rep = 0;

    for (let i = 0; i < history.length; i++) {
        const artist = history[i].master_metadata_album_artist_name;
        if (name === artist) {
            songs.push(history[i]);
        }
    }

    let songCounts = {};
    songs.forEach((song) => {
        if (songCounts[song.master_metadata_track_name]) {
            songCounts[song.master_metadata_track_name]++;
        } else {
            songCounts[song.master_metadata_track_name] = 1;
        }
    });

    let sortedSongs = songs.map((song) => {
        return {
            song: song,
            milliseconds:
                song.ms_played * songCounts[song.master_metadata_track_name],
        };
    });

    sortedSongs.sort((a, b) => b.milliseconds - a.milliseconds);

    return sortedSongs.slice(0, 99);
}