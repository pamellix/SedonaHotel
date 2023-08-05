// скрипт для модальных окон

let inputs = document.querySelectorAll('.blank-review__label');
let inputs_button = document.querySelector('.blank-submit__button');
let success = document.querySelector('.modal-form-success');
let failure = document.querySelector('.modal-form-failure');
let success_button = document.querySelector('.form-success__block-button');
let failure_button = document.querySelector('.form-failure__button');
let form_staying = document.querySelector('.blank-form');

inputs_button.onclick = function () {
  if (inputs.forEach(function(inputs) {
    if (inputs.value != ' ') {
      success.classList.remove('closed');
      form_staying.submit();
    }
    else {
      failure.classList.remove('closed');
    }
  })
  );
};

success_button.onclick = function () {
  success.classList.add('closed');
}

failure_button.onclick = function () {
  failure.classList.add('closed');
}


form_staying.submit = function (event) {
  event.preventDefault();
}
