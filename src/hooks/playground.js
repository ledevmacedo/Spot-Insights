import React from 'react';

import history from './'

const pessoa = [
    {
        nome: "fulano",
        idade: 20
    },
    {
        nome: "fulano",
        idade: 20
    },
    {
        nome: "fulano",
        idade: 20
    },
    {
        nome: "fulano",
        idade: 20
    }
]

/// NOME ///

function nome() {
    return (

        names.filter(name => name.includes('fulano')).length

    )
}



/// IDADE ///

function idade() {
    return (
        <div>
            {names.filter(idade => idade.includes('value')).length}
        </div>
    )
}




/// TOTAL DE PLAYS ///

function calcularTotalPlays() {
    let totalPlays = 0;
    history.forEach((musica) => {
        totalPlays += musica.plays || 0;
    });
    return history.length;
}

/// TOTAL MUSICAS DIFERENTES ///

function contarMusicasDiferentes() {

    const musicasUnicas = new Set();

    listaDeMusicas.forEach((musica) => {
        musicasUnicas.add(musica.cantor);
    });

    const quantidadeMusicasDiferentes = musicasUnicas.size;

    return quantidadeMusicasDiferentes;
}

/// TOTAL MINUTOS OUVIDOS ///

function calcularTempoTotal(listaDeMusicas) {
    let tempoTotalMinutos = 0;
    history.forEach((musica) => {
        tempoTotalMinutos += (musica.ms_played || 0)
    });

    return tempoTotalMinutos;
}

export { nome, idade, }
