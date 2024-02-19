let imgplayer = document.querySelector('#player')
function choose() {

  let type = prompt("Digite 1 para personagem masculino \n 2 para personagem feminino \n E 3 para personagem robô");

  if (type == 1) {
    imgplayer.setAttribute('src', './img/homem.png');
  } else if (type == 2) {
    imgplayer.setAttribute('src', './img/mulher.png');
  } else if (type == 3) {
    imgplayer.setAttribute('src', './img/robopersonagem.png');
  } else {
    alert('Opção inválida');
  }

}
choose();


let bank = [{ id: 1, img: './img/pedra.png' },
{ id: 2, img: './img/papel.png' },
{ id: 3, img: './img/tesoura.png' }]

let textp = document.querySelector('#pontplayer');
let pointplayer = 0
textp.textContent = `Pontos: ${pointplayer} `;
let textr = document.querySelector('#pontrobo');
let pointrobo = 0
textr.textContent = `Pontos: ${pointrobo} `;

function game() {
  let play = document.querySelector('#play');
  let numrandom = 0
  let imgrobo = document.querySelector('#robo');
  let btnstone = document.querySelector('#stone');
  let btnpaper = document.querySelector('#paper');
  let btnscissors = document.querySelector('#scissors');
  let btnplay = document.querySelector('#play');
  let msg = document.querySelector('#msg')
  let emp = 0
  play.style.display = "none";

  function score() {
    numrandom = Math.floor(Math.random() * 3);
    imgrobo.setAttribute('src', bank[numrandom].img);

    if (numrandom == 0) {
      emp = emp + 1;
      msg.textContent = `Empates: ${emp}`
    } else if (numrandom == 1) {
      pointrobo = pointrobo + 1
      textr.textContent = `Pontos: ${pointrobo} `;
    } else {
      pointplayer = pointplayer + 1
      textp.textContent = `Pontos: ${pointplayer} `;
    }

  }
  function paper() {
    numrandom = Math.floor(Math.random() * 3);
    imgrobo.setAttribute('src', bank[numrandom].img);

    if(numrandom == 0){
      pointplayer = pointplayer + 1;
      textp.textContent = `Pontos: ${pointplayer} `
    } else if(numrandom == 1){
      emp = emp + 1;
      msg.textContent = `Empates: ${emp}`
    } else {
      pointrobo = pointrobo + 1
      textr.textContent = `Pontos: ${pointrobo} `;
    }

  }
  function scissors() {
    numrandom = Math.floor(Math.random() * 3);
    imgrobo.setAttribute('src', bank[numrandom].img);

    if (numrandom == 0) {
      pointrobo = pointrobo + 1
      textr.textContent = `Pontos: ${pointrobo} `;
    } else if (numrandom == 1) {
      pointplayer = pointplayer + 1;
      textp.textContent = `Pontos: ${pointplayer} `
  } else {
    emp = emp + 1;
    msg.textContent = `Empates: ${emp}`
  }

}

btnstone.addEventListener('click', () => {
  imgplayer.setAttribute('src', bank[0].img);
  score();
  play.style.display = "none";
});

btnpaper.addEventListener('click', () => {
  imgplayer.setAttribute('src', bank[1].img);
  paper();
  play.style.display = "none";
});

btnscissors.addEventListener('click', () => {
  imgplayer.setAttribute('src', bank[2].img);
  scissors();
  play.style.display = "none";
});



}







