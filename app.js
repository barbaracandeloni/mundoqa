function buscar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
        ("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "Digite algo para começar"
        return
    };
    if (campoPesquisa == " ") {
        section.innerHTML = "Parece que digitou somente espaço"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
        
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                 </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Saiba mais</a>
            </div>
            `
        }
        if (!resultados) {
            resultados = "<p>Nada encontrado</p>"
        }
    };

    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
};