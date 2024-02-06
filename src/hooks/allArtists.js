import fakeHistory from '../data/fakehistory.json'

export function TopArtists() {
    const somaPorArtista = {};

    // Percorre o array de dados
    data.forEach(item => {
        const artistName = item.master_metadata_album_artist_name;
        const msPlayed = item.ms_played;

        // Verifica se o artista já existe no objeto
        if (somaPorArtista[artistName]) {
            // Se existir, adiciona o ms_played
            somaPorArtista[artistName] += msPlayed;
        } else {
            // Se não existir, cria uma nova entrada para o artista
            somaPorArtista[artistName] = msPlayed;
        }
    });

    // Mostra o resultado
    return somaPorArtista;
}