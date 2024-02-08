import history from "../data/history.json";
import fakehistory from "../data/fakehistory.json";

export function topList() {
    console.log(Object.keys(fakehistory))
    console.log(Object.values(fakehistory))
    for (const chave in data) {
        console.log("Chave" + key)
        console.log("Valor" + data[chave])
    }

    dados.forEach(dado => console.log("aqui: " + dado))

    return ""
}

