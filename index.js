const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}
function criarHeroi() {
    rl.question("Digite o nome do herói: ", (nome) => {
        rl.question("Digite a idade do herói: ", (idadeInput) => {
            let idade = parseInt(idadeInput);
            escolherTipo(nome, idade);
        });
    });
}
function escolherTipo(nome, idade) {
    rl.question("Escolha o tipo do herói (mago, guerreiro, monge, ninja): ", (tipo) => {
        tipo = tipo.toLowerCase();
        const tiposValidos = ["mago", "guerreiro", "monge", "ninja"];
        if (!tiposValidos.includes(tipo)) {
            console.log("Tipo de herói inválido. Escolha entre mago, guerreiro, monge ou ninja.");
            escolherTipo(nome, idade);
            return;
        }

        let heroi = new Heroi(nome, idade, tipo);
        heroi.atacar();
        perguntarNovamente();
    });
}
function perguntarNovamente() {
    rl.question("Deseja criar outro herói? (s/n): ", (resposta) => {
        if (resposta.toLowerCase() === 's') {
            criarHeroi();
        } else {
            console.log("Obrigado por jogar!");
            rl.close();
        }
    });
}
criarHeroi();
