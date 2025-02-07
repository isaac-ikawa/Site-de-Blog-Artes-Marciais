// Desenvolvedor Front-end Isaac Ikawa

// nav background - é a aparência visual (cor ou imagem) atrás da barra de navegação de um site.
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//jQuery - é uma biblioteca de JavaScript. Neste caso, está manipulando eventos e animações.
//Filter - filtro
$(document).ready(function () {
    $(".filter-item").click(function () {              //A classe "filter-item" - Representa os elementos de filtro que, quando clicados, acionam a função de filtragem.
        const value = $(this).attr("data-filter");     //A clasee "data-filter" - É usado para determinar quais itens serão exibidos ou ocultados na página.
        if (value == "tudo"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter") // A classe "active-filter" - é utilizada para adicionar uma indicação visual ao item de filtro que está ativo.
    });
});