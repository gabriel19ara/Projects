import { produtos } from './api.js'



produtos.forEach((produto) => {
    let div = document.createElement('div');
    div.className = 'produto';
    div.innerHTML = `


            <img src="${produto.imagem}" alt="${produto.nome}>
            <h2>${produto.nome}</h2>
            <p>${produto.descricao}</p>
            <p>${produto.preco}</p> `;

       console.log(div)
       console.log(div.innerHTML)
       document.body.appendChild(div)
})

console.log("fim")