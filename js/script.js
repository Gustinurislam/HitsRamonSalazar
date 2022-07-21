const rip = document.querySelectorAll('.rip');
const salazar = document.querySelectorAll('.salazar');
const scoreBoard = document.querySelector('.score-board');
const hitSalazar = document.querySelector('#hitsalazar');

let beforeRip;
let end;
let score;

function randomRip(rip) {
  const r = Math.floor(Math.random() * rip.length);
  const rRandom = rip[r];
  if (rRandom == beforeRip) {
    randomRip(rip);
  }
  beforeRip = rRandom;
  return rRandom;
}

function timeRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function riseSalazar() {
  const rRandom = randomRip(rip);
  const tRandom = timeRandom(500, 1000);
  rRandom.classList.add('rise');

  setTimeout(() => {
    rRandom.classList.remove('rise');
    if (!end) {
      riseSalazar();
    }
  }, tRandom);
}

function start() {
  end = false;
  score = 0;
  scoreBoard.textContent = score;
  riseSalazar();
  setTimeout(() => {
    end = true;
  }, 10000);
}

function hit() {
  score++;
  this.parentNode.classList.remove('rise');
  hitSalazar.play();
  scoreBoard.textContent = score;
}

salazar.forEach((s) => {
  s.addEventListener('click', hit);
});
