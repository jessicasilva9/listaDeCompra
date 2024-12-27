const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras")
let contador = 0;
botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault();

    const itemDalista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");
    const containerNomeDoItem = document.createElement("div");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-containe");

    //checkbox
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + contador++

    //label

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
        } else {
            checkboxCustomizado.classList.remove("checked")
        }
    })

    //checkbox customizado
    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado")

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado)

    containerCheckbox.appendChild(checkboxLabel)
    containerNomeDoItem.appendChild(containerCheckbox)

    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item.value;
    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");

    const botaoRmover = document.createElement("button");
    botaoRmover.classList.add("item-lista-button-delete");

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button-editar")


    //botao remover

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/lixo.png";
    imagemRemover.alt = "Remover";
    botaoRmover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRmover);


    //botao editar

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/lapis.png";
    imagemEditar.alt = "Editar";
    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar)


    containerItemLista.appendChild(containerNomeDoItem)
    containerItemLista.appendChild(containerBotoes)

    itemDalista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDalista)
}
