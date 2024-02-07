import history from "../data/history.json";


//Total de Tracks já ouvidas
export function quantidadePlays() {
    return history.length;
}

//Total de Tracks unicas já ouvidas
export function musicasUnicas() {
    const musicasUnicas = new Set();
    history.forEach((musica) => {
        musicasUnicas.add(musica.master_metadata_track_name);
    });

    const quantidadeMusicasDiferentes = musicasUnicas.size;
    return quantidadeMusicasDiferentes;
}

//Total de Minutos já ouvidos
export function quantidadeMinutos() {
    const totalMilissegundos = history.reduce((acc, ele) => {
        return acc + ele.ms_played;
    }, 0);

    const totalMinutos = totalMilissegundos / 60000;
    const minutosFormatados = Math.round(totalMinutos);
    const minutosString = minutosFormatados
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return minutosString;
}

export function quantidadeHoras() {
    const totalMilissegundos = history.reduce((acc, ele) => {
        return acc + ele.ms_played;
    }, 0);

    const totalMinutos = totalMilissegundos / 3600000;
    const minutosFormatados = Math.round(totalMinutos);
    const minutosString = minutosFormatados
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return minutosString;
}
