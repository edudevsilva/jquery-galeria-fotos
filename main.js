$(document).ready(function(){
    console.log(document.querySelector('header button'))
    console.log($('#botao-cancelar'))

    /* Desempenha a mesma função de:
    
    document.querySelector('header button').addEventListener('click', function() {

})*/$('header button').click(function() {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })

$('form').on('submit', function(e){
    e.preventDefault();
    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
    const novoItem = $('<li style="display: none"></li>')
    $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem)
    $(`
        <div class="overlay-imagem-link">
            <a href="./imagens/escadas.jpg" title="Ver imagem em tamanho real" target="_blank">
                Ver imagem em tamanho real
            </a>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000); //Essa função está em milisegundos, por isso 000
        $('#endereco-imagem-nova').val('');
})

})