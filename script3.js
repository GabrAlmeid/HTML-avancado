/* Linha no canvas 

let tela = document.getElementById("tela");

let context = tela.getContext("2d");

context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(500, 0);
context.lineWidth = 5;
context.strokeStyle = "red"
context.stroke();
*/

/* Retângulo 

let tela = document.getElementById("tela");

let context = tela.getContext("2d");

context.fillStyle = "blue"
context.fillRect(10, 10, 100, 200);

context.strokeStyle = "blue"
context.strokeRect(390, 10, 100, 200)

context.clearRect(20, 20, 30, 30)
*/

/* Path 

let tela = document.getElementById("tela");

let context = tela.getContext("2d");

context.beginPath();

context.lineWidth = 4;
context.strokeStyle = "blue";
context.moveTo(10, 10);
context.lineTo(400, 300);
context.stroke();

context.beginPath();

context.lineWidth = 6;
context.strokeStyle = "red";
context.fillStyle = "green"
context.moveTo(70, 10);
context.lineTo(300, 300);
context.lineTo(200, 300);
context.closePath();
context.fill();
context.stroke();
*/

/* Triangulo de player para treino 

let tela = document.getElementById("tela");

let context = tela.getContext("2d");

context.beginPath();

context.lineWidth = 5;
context.strokeStyle = 'beige';
context.fillStyle = 'beige';

context.moveTo(320,175);
context.lineTo(200,240);
context.lineTo(200,100);

context.closePath();
context.stroke();
context.fill();
*/

/* Circulos com animação 

let tela = document.getElementById("tela");

let context = tela.getContext("2d");

let circle = {
    x : 250,
    y : 250,
    raio : 100,
    inicio : 0,
    fim : 0,
}

function drawCircle(c){
 
context.beginPath();
context.rect(0, 0, 500, 500);
context.fillStyle = "black";
context.fill();

context.beginPath();
context.strokeStyle = "red";
context.fillStyle = "green";
context.arc(c.x, c.y, c.raio, c.inicio, c.fim);

context.fill();
context.stroke();
};

setInterval(function(){

    if(circle.fim < 2 * Math.PI){
        circle.fim += 0.3;
        circle.x += 3;
    }

    drawCircle(circle)

},100);
*/