function carregar() {
    fetch('jogos.json')
        .then(response => response.json())
        .then(jogos => {
            const conteiner = document.querySelector("#jogos-conteiner");

            // Criar uma única linha
            const linha = document.createElement("div");
            linha.classList.add("linha");

            for (let i = 0; i < jogos.length; i++) {
                const jogo = jogos[i];
                const card = document.createElement("div");
                card.classList.add("card");

                const img = document.createElement("img");
                img.src = jogo.imagem;
                img.alt = jogo.nome;

                const titulo = document.createElement("h3");
                titulo.textContent = jogo.nome;

                const preco = document.createElement("h3");
                preco.textContent = jogo.preco;

                card.appendChild(img);
                card.appendChild(titulo);
                card.appendChild(preco)
                linha.appendChild(card);
            }

            // Adicionar a linha ao conteiner
            conteiner.appendChild(linha);
        })
        .catch(error => console.error('Erro ao carregar os jogos:', error));
}

// Chame a função carregar para carregar os jogos quando a página carregar
carregar();
