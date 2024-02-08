import history from "../data/history.json";

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
  const minutosString = minutosFormatados
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return minutosString;
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
