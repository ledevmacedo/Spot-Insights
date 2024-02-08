import history from "../data/history.json";
import fakehistory from "../data/fakehistory.json";

export function historySemPodcast() {
  return history.filter((element) => element.episode_show_name === null);
}

export function quantidadePlaysArtista(artista) {
  const filtrarArtista = history.filter(
    (element) => element.master_metadata_album_artist_name === artista
  );
  const playsPorArtista = filtrarArtista.length;

  return playsPorArtista;
}

export function quantidadeMusicasDiferentesArtista(artista) {
  const filtrarArtista = history.filter(
    (element) => element.master_metadata_album_artist_name === artista
  );

  // o Set vai filtrar pra tirar as músicas repetidas
  const musicasUnicasArtista = new Set();

  filtrarArtista.forEach((musica) => {
    musicasUnicasArtista.add(musica.master_metadata_track_name);
  });

  const quantidadeMusicasDiferentesArtista = musicasUnicasArtista.size;

  return quantidadeMusicasDiferentesArtista;
}

export function quantidadeMinutosArtista(artista) {
  const filtrarArtista = history.filter(
    (element) => element.master_metadata_album_artist_name === artista
  );

  const totalMilissegundos = filtrarArtista.reduce((acc, ele) => {
    return acc + ele.ms_played;
  }, 0);

  const totalMinutos = totalMilissegundos / 60000;
  const minutosFormatados = Math.round(totalMinutos);
  return minutosFormatados;
}

export function porcentagemPlaysArtista(artista) {
  // primeiro pegar length do histórico
  const totalPLays = history.length;

  // depois length do artista
  const filtrarArtista = history.filter(
    (element) => element.master_metadata_album_artist_name === artista
  );
  const totalPlaysArtista = filtrarArtista.length;

  // conta de porcentagem
  const porcentagem = (totalPlaysArtista / totalPLays) * 100;

  return porcentagem.toFixed(2);
}


export function encontrarArtistaMaisOuvido() {
  const contagemDePlaysPorArtista = {};

  history.forEach((musica) => {
    const cantor = musica.master_metadata_album_artist_name;
    const plays = musica.ms_played || 0;

    if (contagemDePlaysPorArtista[cantor]) {
      contagemDePlaysPorArtista[cantor] += plays;
    } else {
      contagemDePlaysPorArtista[cantor] = plays;
    }
  });

  let sortable = [];
  for (let cantor in contagemDePlaysPorArtista) {
    sortable.push([cantor, contagemDePlaysPorArtista[cantor]]);
  }



  sortable.sort(function (a, b) {
    return b[1] - a[1]; // Ordenando de forma decrescente
  });

  return sortable.slice(1, 100);
}

