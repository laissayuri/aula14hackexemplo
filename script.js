// let nome = prompt("Qual o seu nome?");

// document.querySelector("#usuario").innerHTML = nome;

function entrar(){

    let nome = document.querySelector("input").value; // pega o valor digitado no input
    if(nome.trim()) { // se a pessoa digitou algo, o nome é true, entao executa o negocio
                    // trim faz com que o começo e o final sejam removidos se forem espaço
                    // se tudo for espaço, nao entra.
        document.querySelector("#usuario").innerHTML = nome;
        document.querySelector("#entrada").style.display = "none"; // input desaparece
        document.querySelector("header").style.display = "flex"; //header reaparece
    }
    
}

document.querySelector("button").onclick = entrar;

function logar(){
    console.log(this); // this vai ser referente a tag span
    console.log(this.innerHTML); // this vai ser referente ao nome usuario. This seria "eu"
}

document.querySelector("#usuario").onmouseenter = logar; // this é referente ao usuario

// for (let link of document.querySelectorAll("nav a")){
//     link.onmouseenter = logar; // this é referente aos links
// }

console.log(this); // vai mostrar o global window