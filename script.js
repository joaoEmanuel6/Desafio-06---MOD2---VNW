// Crie um objeto que receba ao menos três propriedades sobre você.
let eu = {
    nome:"João",
    idade:18,
    profissao:"estudante VNW"
}
// Adicione uma nova propriedade sem alterar seu objeto inicial.
eu.corDoCabelo ="Preto"
// Remova uma propriedade desse objeto.
delete eu.idade
//Mostre no console todas as propriedades desse objeto.
console.log(eu)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro =  [
    {
        nome: "Jão",
        idade: 18,
        telefone: 92993355961,
        amigos: [
            "carlos", "Isa","pedro","Fernando"
        ]
    },
    {
        nome: "Sampaio",
        idade: 20,
        telefone: 92993353961,
        amigos: [
            "josé", "Isa","pedro","Fernando"
        ]
    },
    {
        nome: "Herick",
        idade: 25,
        telefone: 92993355961,
        amigos: [
            "josé", "Isa","pedro","Fernando"
        ]
    },
    {
        nome: "Mathias",
        idade: 44,
        telefone: 92993355961,
        amigos: [
            "josé", "Isa","pedro","Fernando"
        ]
    },
    {
        nome: "Antonia",
        idade: 129,
        telefone: 92993355961,
        amigos: [
            "josé", "Isa","pedro","Fernando"
        ]
    }
]

// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[3])
console.log(cadastro[3].amigos[1])
console.log(cadastro[4].amigos[2])