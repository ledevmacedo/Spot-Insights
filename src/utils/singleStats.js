import history from "../data/history.json";
import { historySemPodcast } from "./utils";

//Total de Tracks já ouvidas
export function quantidadePlays() {
  return history.length;
}

//Total de Tracks unicas já ouvidas
export function musicasUnicas() {
  let musicasUnicas = new Set();
  historySemPodcast().forEach((musica) => {
    musicasUnicas.add(musica.master_metadata_track_name);
  });

  // remover null
  musicasUnicas = new Set([...musicasUnicas].filter((value) => value !== null));

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

  return minutosFormatados;
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

export function mediaTempoDiario() {
  // primeiro somar todos os ms:
  const totalMilissegundos = history.reduce((acc, ele) => {
    return acc + ele.ms_played;
  }, 0);

  //   encontrar data mais antiga e data mais atual
  let dataMaisAntiga = new Date(history[0].ts);
  let dataMaisRecente = new Date(history[0].ts);
  let objetoMaisAntigo = history[0];
  let objetoMaisRecente = history[0];

  history.forEach((objeto) => {
    const dataObjeto = new Date(objeto.ts);

    // verificar se a data do objeto é mais antiga que a data mais antiga atual
    if (dataObjeto < dataMaisAntiga) {
      dataMaisAntiga = dataObjeto;
      objetoMaisAntigo = objeto;
    }

    // verificar se a data do objeto é mais recente que a data mais recente atual
    if (dataObjeto > dataMaisRecente) {
      dataMaisRecente = dataObjeto;
      objetoMaisRecente = objeto;
    }
  });

  // calcular a diferença em milissegundos entre as duas datas
  const diferencaEmMilissegundos =
    dataMaisRecente.getTime() - dataMaisAntiga.getTime();

  // calcular o número de dias dividindo a diferença em milissegundos pelo número de milissegundos em um dia
  const numeroDeDias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);

  // dividir a soma pelo total de dias
  const divisao = totalMilissegundos / numeroDeDias;
  
  const transformarParaMinutos = divisao / 60000;
  const minutosFormatados = Math.round(transformarParaMinutos);

  return minutosFormatados;
}
