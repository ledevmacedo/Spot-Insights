export function List({ playTime, release, trackName, albumAuthor, albumName, episodeName, episodeShow, spotifyUrl, reasonStart, reasonEnd, shuffle, skipped }) {



    return (
        <>  <div className="flex gap-2 flex-col">
            <h1 className="text-white-main text-3xl font-geist">
                playtime: {playTime}
            </h1>
            {/* <h1 className="text-white-main text-3xl font-geist">
                release: {release}
            </h1>
            <h1 className="text-white-main text-3xl font-geist">
                trackname:  {trackName}
            </h1>
            <h1 className="text-white-main text-3xl font-geist">
                Author: {albumAuthor}
            </h1>
            <h1 className="text-white-main text-3xl font-geist">
                album: {albumName}
            </h1>
            <h1 className="text-white-main text-3xl font-geist">
                ep: {episodeName}
            </h1>
            <h1 className="text-white-main text-3xl font-geist">
                ep show: {episodeShow}
            </h1>
            <h1 className="text-white-main text-3xl font-geist">
                url: {spotifyUrl}
            </h1>
            <h1 className="text-white-main text-3xl font-geist">
                reason start:  {reasonStart}
            </h1>
            <h1 className="text-white-main text-3xl font-geist">
                {reasonEnd}
            </h1>
            <h1 className="text-white-main text-3xl font-geist">
                shuffle: {shuffle}
            </h1>
            <h1 className="text-white-main text-3xl font-geist">
                skipped: {skipped}
            </h1> */}
        </div>
        </>
    )
}

// {"ms_played": 216520,
//     "ts": "2017-09-14T18:00:11Z",
//     "master_metadata_track_name": "Neighbor",
//     "master_metadata_album_artist_name": "J. Cole",
//     "master_metadata_album_album_name": "4 Your Eyez Only",
//     "episoe_name": null,
//     "episode_show_name": null,
//     "spotify_episode_uri": null,
//     "reason_start": "fwdbtn",
//     "reason_end": null,
//     "shuffle": true,
//     "skipped": null
// },
