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
  function quantidadeMinutos() {
    const totalMilissegundos = fakehistory.reduce((acc, ele) => {
      return acc + ele.ms_played;
    }, 0);

    const totalMinutos = totalMilissegundos / 60000;
    const minutosFormatados = Math.round(totalMinutos);
    const minutosString = minutosFormatados
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return minutosString;
  }

  function musicasUnicas() {
    const musicasUnicas = new Set();
    fakehistory.forEach((musica) => {
      musicasUnicas.add(musica.master_metadata_track_name);
    });

    const quantidadeMusicasDiferentes = musicasUnicas.size;
    return quantidadeMusicasDiferentes;
  }

  function encontrarArtistaMaisOuvido() {
    const contagemDePlaysPorArtista = {};
    fakehistory.forEach((musica) => {
      const cantor = musica.master_metadata_album_artist_name;
      const plays = musica.ms_played || 0;

      if (contagemDePlaysPorArtista[cantor]) {
        contagemDePlaysPorArtista[cantor] += plays;
      } else {
        contagemDePlaysPorArtista[cantor] = plays;
      }
    });

    const cantor = musica.master_metadata_album_artist_name;
    const plays = musica.ms_played || 0;

    let sortable = [];
    for (let cantor in plays) {
      sortable.push([cantor, plays[cantor]]);
    }

    sortable.sort(function (a, b) {
      return a[1] - b[1];
    });
    return sortable;
  }

  return (
    <>
      <div className="h-dvh p-2 bg-purple-black">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <UnicStatsCard
              icon={
                <MusicFilter
                  size="25"
                  color="#B282FF"
                  variant="Bold"
                  className="mt-1"
                />
              }
              title={"Music Listened"}
              value={quantidadePlays()}
            />
            <UnicStatsCard
              icon={
                <MusicPlay
                  size="25"
                  color="#B282FF"
                  variant="Bold"
                  className="mt-1"
                />
              }
              title={"Minutes Listened"}
              value={quantidadeMinutos()}
            />
          </div>
          <div className="flex gap-2">
            <UnicStatsCard
              icon={
                <MusicPlay
                  size="25"
                  color="#B282FF"
                  variant="Bold"
                  className="mt-1"
                />
              }
              title={"Unique Musics"}
              value={musicasUnicas()}
            />
          </div>

          {/* playTime={Math.round(ele.totalMsPlayed / 3600000)} */}
          <h1 className="font-geist text-white-light text-3xl mt-6 mb-2">
            Top Artists
          </h1>
          <h1 className="font-geist text-white-light text-3xl mt-6 mb-2">
            {/* {encontrarArtistaMaisOuvido()} */}
          </h1>
          {/* {encontrarArtistaMaisOuvido.map((ele, index) => (
            <ArtistsCard key={index} albumAuthor={ele.name} index={index + 1} playTime={ele.totalMsPlayed < 3600000 ? Math.round(ele.totalMsPlayed / 60000) + " Minutes" : Math.round(ele.totalMsPlayed / 3600000) + " Hours"} />
          ))} */}
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
