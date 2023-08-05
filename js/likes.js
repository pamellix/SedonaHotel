// скрипт для лайков

const cards = document.querySelector('.cards');
const likes = document.querySelectorAll('.card-info');
const cardElements = document.querySelectorAll('.card');
let likes_number = document.querySelectorAll('.card-info__counter-number');
const click_button = document.querySelectorAll('.card-info__counter');

cardElements.forEach((cardElement) => {
  const counter = cardElement.querySelector('.card-info__counter');
  console.log(counter)
  const counterText = counter.querySelector('.card-info__counter-number');
  const likeIcon = counter.querySelector('svg');
  counter.onclick = () => {
    if (likeIcon.classList.contains('active')) {
      counterText.textContent--;

    } else {
      counterText.textContent++;
    }


    likeIcon.classList.toggle('active');
  }
})
