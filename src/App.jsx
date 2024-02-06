import React from 'react';
import { EmojiHappy } from 'iconsax-react';
import history from './data/history.json'
import fakehistory from './data/fakehistory.json'
import { List } from './components/list';

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

export default function App() {
  return (
    <>

      <div className='h-dvh w-full bg-purple-dark'>
        {fakehistory.map((ele, index) => (
          <List key={index}
            playTime={ele.ms_played}
            relese={ele.ts}
            trackName={ele.master_metadata_track_name} 
            albumAuthor={ele.master_metadata_album_artist_name}  
            albumName={ele.master_metadata_album_album_name}  
            episodeName={ele.episoe_name}
            episodeShow={ele.episode_show_name}
            spotifyUrl={ele.spotify_episode_uri}
            reasonStart={ele.reason_start}
            reasonEnd={ele.reason_end}
            shuffle={ele.shuffle}
            skipped={ele.skipped}
            />
        ))}
      </div>
    </>
  )
}



