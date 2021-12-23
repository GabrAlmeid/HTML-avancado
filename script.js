/*
let image = document.getElementById("like");

image.addEventListener("click", function() {

   // image.src = "./img/polegarvermelho.png"
   
   let lastImage = image.getAttribute("src")
   image.setAttribute("src", "./img/polegarvermelho.png")

   console.log(lastImage)
   
})
*/

let lista = document.getElementById("lista");

lista.dataset.num = "8"

let id = lista.dataset.id;
console.log(id)

let num = parseInt(lista.dataset.num);
console.log(lista.dataset.num)

let conteudo = ""

for(let i = 0; i < num; i++){

    conteudo += "<li>" + i + "</li>"

}

lista.innerHTML = conteudo