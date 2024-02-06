import React from 'react';
import { EmojiHappy } from 'iconsax-react';
import history from './data/history.json'
import fakehistory from './data/fakehistory.json'
import { List } from './components/list';
import { ArtistsCard } from './pages/home/artistsCard';



export default function App() {

  function calcularTotalPlays() {
    let playTime = 0;
    fakehistory.forEach((ms_played) => {
      playTime += ms_played.plays || 0;
    });
    return fakehistory.length;
  }

  return (
    <>

      <div className='h-dvh w-full bg-purple-dark'>
        <ArtistsCard />
        {fakehistory.map((ele, index) => (
          <List key={index}
            playTime={calcularTotalPlays()}
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



