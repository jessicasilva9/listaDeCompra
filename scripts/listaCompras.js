
const inputAdicionarItem = document.getElementById("input-adicionar-item");
const botaoAdicionarItem = document.getElementById("botao-adicionar-item");
const ulListaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados")
const mensagemListaVazia = document.getElementById("mensagem-lista-vazia")

let contador = 0
botaoAdicionarItem.addEventListener("click", adicionarItem)//ao clicar no botao adiciona a função


function adicionarItem(evento) {
    evento.preventDefault();

    if( inputAdicionarItem.value === ''){
        alert("Adicione um item");
        return

    }


    const itemDaListaLi = document.createElement("li"); //cria uma lista de itens
    const containerListaItem = document.createElement("div");// cria uma div
    containerListaItem.classList.add("container-lista-item");//dentro da div cria uma classe
    const containerNomeDoItem = document.createElement("div");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");


    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + contador++

    //label
    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);


    function verficarlistaVazia(Lista) {
        const mensagemListaVazia = document.getElementById("mensagem-lista-vazia")
        if (Lista.querySelectorAll("li").length === 0) {
            mensagemListaVazia.style.display = "block";
        } else {
            mensagemListaVazia.style.display = "none"
        }
    }

    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo")


        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through"
            listaComprados.appendChild(itemDaListaLi)
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none"
            ulListaDeCompras.appendChild(itemDaListaLi)

        }
    })
    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox)

    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo"
    nomeDoItem.innerHTML = inputAdicionarItem.value;
    containerNomeDoItem.appendChild(nomeDoItem)

    const containerBotoes = document.createElement("div");

    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button-delete")

    botaoRemover.addEventListener("click", function () {
        let confirmacao = confirm("Tem certeza que deseja excluir esse item?")
        if (confirmacao) {
            itemDaListaLi.remove()
            verficarlistaVazia(listaComprados)
            verficarlistaVazia(listaDeCompras)
        }
    })


    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button-editar");

    function editarItem(itemTitulo, itemDaListaLi, checkboxInput, itemData) {
        let novoItem = prompt("Digite  o novo nome do item:");
        if (novoItem !== null && novoItem.trim() !== "") {
            // const itemTitulo = itemTitulo;
            itemTitulo.innerText = novoItem;
            itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })}    
    (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString()}`
            itemData.classList.add("texto-data")
            if (checkboxInput.checked) {
                itemTitulo.style.textDecoration = "line-through";
                listaComprados.appendChild(itemDaListaLi);
            } else {
                itemTitulo.style.textDecoration = "none";
                ulListaDeCompras.appendChild(itemDaListaLi);
            }

            alert("Item atualizado com sucesso!"); // Mensagem de confirmação
        } else {
            alert("O nome doitem não pode estar vazio!")
        }
    }
    botaoEditar.addEventListener("click", function () {
        editarItem(nomeDoItem, itemDaListaLi, checkboxInput, itemData);
    });



    const imagemRemover = document.createElement("img");
    imagemRemover.src = "assets/img/trash-bin-minimalistic-2-svgrepo-com.svg"
    imagemRemover.alt = "Remover";
    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover)

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "assets/img/pen-svgrepo-com (1).svg";
    imagemEditar.alt = "Editar";
    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar)




    containerListaItem.appendChild(containerNomeDoItem);// adiciona o item como filho da div
    containerListaItem.appendChild(containerBotoes)

    const itemData = document.createElement("p");
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })}    
    (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString()}`
    itemData.classList.add("texto-data")

    containerListaItem.appendChild(itemData)
    itemDaListaLi.appendChild(containerListaItem)//adiciona a div com o item ao filho da lista

    ulListaDeCompras.appendChild(itemDaListaLi)
    verficarlistaVazia(ulListaDeCompras) 
       inputAdicionarItem.value = '';
   
}