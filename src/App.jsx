import React from "react";
import { EmojiHappy } from "iconsax-react";
import history from "./data/history.json";
import fakehistory from "./data/fakehistory.json";
import { List } from "./components/list";
import { ArtistsCard } from "./pages/home/artistsCard";
import { TotalPlaysCard } from "./pages/home/totalPlaysCard";
import { TotalHoursCard } from "./pages/home/totalHoursCard";
import { Play } from "iconsax-react";

export default function App() {
  // function calcularTotalPlays() {
  //   fakehistory.map(ms_played)
  //   return total
  // }

  function quantidadePlays() {
    return fakehistory.length;
    // blabla
  }
  function quantidadeHoras() {
    const totalMilissegundos = fakehistory.reduce((acc, ele) => {
      return acc + ele.ms_played;
    }, 0);

    const totalHoras = totalMilissegundos / 3600000;

    return totalHoras;
  }


  function musicasDiferentes() {
    let musicasDiferentes = new Set(fakehistory.master_metadata_track_name)
      .length;
    return musicasDiferentes;
  }

  return (
    <>
      <div className="h-dvh p-2 bg-purple-black">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <TotalPlaysCard playTime={quantidadePlays()} />
            <TotalHoursCard playTime={quantidadeHoras()} />
          </div>


          <div className=" text-white-dark">aaaaaa</div>

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
