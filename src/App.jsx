import React from "react";
import { EmojiHappy } from "iconsax-react";
import history from "./data/history.json";
import fakehistory from "./data/fakehistory.json";
import { List } from "./components/list";
import { ArtistsCard } from "./pages/home/artistsCard";
import { TotalPlaysCard } from "./pages/home/totalPlaysCard";
import { Play } from "iconsax-react";

export default function App() {
  // function calcularTotalPlays() {
  //   fakehistory.map(ms_played)
  //   return total
  // }

  function quantidadePlays() {
    return fakehistory.length;
  }

  return (
    <>
      <div className="h-dvh p-2 bg-purple-black">
        <div className="flex flex-col gap-2">
          <TotalPlaysCard playTime={quantidadePlays()} />

          {fakehistory.map((ele, index) => (
            <ArtistsCard
              key={index}
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
      </div>
    </>
  );
}
