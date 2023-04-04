let background = document.querySelector('.background'),
  indiaFirst = background.querySelector('.india-first'),
  uk = background.querySelector('.uk'),
  italy = background.querySelector('.italy'),
  indiaBig = background.querySelector('.india-big'),
  indiaSecond = background.querySelector('.india-second'),
  input = document.querySelector('#input'),
  submit = document.querySelector('#submit'),
  delay,
  symbols = /[!@#$%^&*()]/g,
  text = document.querySelector('.main__txt'),
  navMobile = document.querySelector('.btn_nav'),
  navBar = document.querySelector('.nav');


function getData() {
  const requestURL = 'https://baconipsum.com/api/?type=lucky';
  const xhr = new XMLHttpRequest();

  xhr.open('GET', requestURL);

  xhr.onload = () => {
    if (xhr.status !== 200) {
      return;
    }

    let str = xhr.response.slice(2).split(`","`);
    text.innerHTML = str[0];
  }

  xhr.send();
}

function animation(country, top, left) {
  country.style.top = top;
  country.style.left = left;

  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 400);
  });
}

function spin() {
  background.classList.add('spin');
}

document.addEventListener('DOMContentLoaded', () => {
  getData();
});

window.addEventListener('load', () => {
  delay = setTimeout(() => {
    animation(indiaFirst, '230px', '-30px').then(function () {
      return animation(uk, '40px', '-30px');
    }).then(function () {
      return animation(italy, '-50px', '180px')
    }).then(function () {
      return animation(indiaBig, '40px', '350px')
    }).then(function () {
      return animation(indiaSecond, '230', '410px')
    }).then(function () {
      return spin()
    });
  }, 3000);

  submit.addEventListener('click', (e) => {
    if (input.value.match(symbols)) {
      input.setCustomValidity('Поле не должно содержать !@#$%^&*()');
    } else {
      input.setCustomValidity('');
    }
  });

  navMobile.addEventListener('click', () => {
    navMobile.classList.toggle('btn_nav_active')
    navBar.classList.toggle('nav_active')
  })
});

