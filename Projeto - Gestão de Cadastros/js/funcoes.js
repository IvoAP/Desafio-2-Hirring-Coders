function validarProduto( idnome, idendereco, idemail, idproduto, idcodigo, idquantidade){
    let nome = document.getElementById(idnome).value;
    let endereco = document.getElementById(idendereco).value;
    let email = document.getElementById(idemail).value;
    let produto = document.getElementById(idproduto).value;
    let codigo = document.getElementById(idcodigo).value;
    let quantidade = document.getElementById(idquantidade).value;

    let novoItem = {
        name:nome, 
        address: endereco,
        mail: email,
        product: produto,
        code: codigo,
        qtd: quantidade
    };

    let itens = localStorage.getItem("itens");
    if(itens == null)
        itens = [];
    else
        itens = JSON.parse(itens)

    itens.push(novoItem);
    localStorage.setItem("itens", JSON.stringify(itens));
    alert("Produto Cadastrado com sucesso!");
    location.reload();

}


function listarEstoque(){
    let itens = localStorage.getItem("itens");
    document.write("<h1> Estoque </h1>")

    if(itens == null)
        alert("Ihaaaaaaa");
    //     document.write("<h3> Ainda não há nenhum item cadastrado </h3>");
    else{
        itens = JSON.parse(itens);
        itens.forEach(item => {
            document.write("<ul>");
            document.write("<li> Nome do cliente: " + item.name + "</li  ");
            document.write("<br>")
            document.write("<li> Endereço do cliente: " + item.address +  " </li  ");
            document.write("<br>")
            document.write("<li> Email do cliente: " + item.mail  + " </li  ");
            document.write("<br>")
            document.write("<li> Nome do produto: " + item.product +  " </li  ");
            document.write("<br>")
            document.write("<li> Código do produto: " + item.code + "</li  ");
            document.write("<br>")
            document.write("<li> Quantidade do produto: " + item.qtd + " </li  ");
            document.write("<br>")
            document.write("</ul>");
            document.write("<br>")
            document.write("<br>")
        });
    }
}

