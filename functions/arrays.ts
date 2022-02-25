
//função responsavel por embaralhar tanto uma lista de questões quanto de respostas.
export function embaralhar(elementos: any[]): any[] {
    return elementos
    .map(valor => ({ valor, aleatorio: Math.random() }))
    .sort((obj1, obj2) => obj1.aleatorio - obj2.aleatorio)
    .map(obj => obj.valor)
}