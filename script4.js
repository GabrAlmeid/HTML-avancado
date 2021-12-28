/* Primeira maneira de como inserir imagens com Canvas

let tela = document.getElementById("tela");

let context = tela.getContext("2d");

let img = document.getElementById("coroa");

context.drawImage(img, 20, 20);
*/

/* colocando imagem direto pelo JS 

let tela = document.getElementById("tela");

let context = tela.getContext("2d");

let img = new Image();
img.src = "./img/coroa.png"

img.onload = desenharImg;

function desenharImg(){
    context.drawImage(this, 20, 20, this.naturalWidth / 2, this.naturalHeight / 2 );
}
*/


