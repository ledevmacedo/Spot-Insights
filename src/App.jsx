import React from "react";
import { EmojiHappy } from "iconsax-react";
import history from "./data/history.json";
import fakehistory from "./data/fakehistory.json";
import { List } from "./components/list";
import { ArtistsCard } from "./pages/home/artistsCard";
import { UnicStatsCard } from "./pages/home/unicStatsCard";
import { MusicFilter, MusicPlay } from "iconsax-react";


import { Play } from "iconsax-react";
export default function App() {
  function quantidadePlays() {
    return fakehistory.length;
  }
  function quantidadeHoras() {
    const totalMilissegundos = fakehistory.reduce((acc, ele) => {
      return acc + ele.ms_played;
    }, 0);

    const totalHoras = totalMilissegundos / 3600000;

    return Math.round(totalHoras);
  }

  function musicasUnicas() {
    const musicasUnicas = new Set();
    fakehistory.forEach((musica) => {
      musicasUnicas.add(musica.master_metadata_track_name);
    });

    const quantidadeMusicasDiferentes = musicasUnicas.size;
    return quantidadeMusicasDiferentes;
  }


  const artistTotals = {};

  // Calcular o total para cada artista
  fakehistory.forEach(item => {
    const artist = item.master_metadata_album_artist_name;
    artistTotals[artist] = (artistTotals[artist] || 0) + item.ms_played;
  });

  const artistList = Object.keys(artistTotals).map(artist => ({
    name: artist,
    totalMsPlayed: artistTotals[artist],
  }));

  // Encontrar o artista com o tempo máximo
  const maxArtist = Object.keys(artistTotals).reduce((a, b) => artistTotals[a] > artistTotals[b] ? a : b);


  return (


    <>
      <div className="h-dvh p-2 bg-purple-black">
        <div className="flex flex-col gap-2">

          <div className="flex gap-2">
            <UnicStatsCard
              icon={<MusicFilter size="25" color="#B282FF" variant="Bold" className="mt-1" />} title={"Music Listened"}
              value={quantidadePlays()}
            />
            <UnicStatsCard
              icon={<MusicPlay size="25" color="#B282FF" variant="Bold" className="mt-1" />} title={"Hours Listened"}
              value={quantidadeHoras()}
            />

          </div>
          <div className="flex gap-2">
            <UnicStatsCard
              icon={<MusicPlay size="25" color="#B282FF" variant="Bold" className="mt-1" />} title={"Unique Musics"}
              value={musicasUnicas()}
            />
          </div>

          <div className=" text-white-dark">
            {maxArtist}
          </div>
          <div className=" text-white-dark">
            {artistTotals[maxArtist]}
          </div>

          {/* playTime={Math.round(ele.totalMsPlayed / 3600000)} */}
          {artistList.map((ele, index) => (
            <ArtistsCard key={index} albumAuthor={ele.name} playTime={ele.totalMsPlayed < 3600000 ? Math.round(ele.totalMsPlayed / 60000) + " Minutes" : Math.round(ele.totalMsPlayed / 3600000) + " Hours"} />
          ))}
          {/* {fakehistory.map((ele, index) => (
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
          ))} */}
        </div>
      </div>
    </>
  );
}
