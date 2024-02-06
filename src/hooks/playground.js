import React from 'react';


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
        <div>
                {names.filter(name => name.includes('fulano')).length}
        </div>
    )
}


export default nome

/// IDADE ///

function idade() {
    return (
        <div>
                {names.filter(idade => idade.includes('value')).length}
        </div>
    )
}


export default idade

