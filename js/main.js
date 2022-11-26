//Калькулятор
const calcButton = document.querySelectorAll('.calc-btn');
const inputItem = document.querySelector('input.money');
const moneyItem = document.querySelector('.calc_money');
const persentItem = document.querySelector('.calc_persent');
const allItem = document.querySelector('.calc_all');
const persentFree = document.querySelector('.persent-free');
const persentMed = document.querySelector('.persent-med');
const persentPro = document.querySelector('.persent-pro');
persentItem.innerHTML = persentFree.value;
inputItem.value = 0;
calcButton[0].addEventListener('click', () => {
    calcButton[0].classList.add('check');
    calcButton[1].classList.remove('check');
    calcButton[2].classList.remove('check');
    persentItem.innerHTML = persentFree.value;
});
calcButton[1].addEventListener('click', () => {
    calcButton[1].classList.add('check');
    calcButton[0].classList.remove('check');
    calcButton[2].classList.remove('check');
    persentItem.innerHTML = persentMed.value;
});
calcButton[2].addEventListener('click', () => {
    calcButton[2].classList.add('check');
    calcButton[1].classList.remove('check');
    calcButton[0].classList.remove('check');
    persentItem.innerHTML = persentPro.value;
});
inputItem.addEventListener('click', () => {
    inputItem.value = '';
})
inputItem.addEventListener('keyup', calculate);
function calculate() {
    inputItem.value = inputItem.value.replace(/[^\d]/g,'');
    moneyItem.innerHTML = inputItem.value;
    x1 = Number(moneyItem.innerHTML);
    x2 = Number(persentItem.innerHTML);
    allItem.innerHTML = (x1 + (x1 * x2 / 100)).toFixed(2);

}
setInterval(calculate, 1000)
//Дата на главной
let now = new Date();
const dateItem = document.querySelector('.date_today');
const options = {
    month: 'long',
    day: 'numeric',
  };
dateItem.innerHTML = now.toLocaleString("ru", options);

const requestHour = document.querySelectorAll('.adv-hour');
const requestMin = document.querySelector('.adv-min');
const successMin = document.querySelector('.adv-min-1');
const moneyMin = document.querySelector('.adv-min-2');
function timeUpdate() {
    let timeAdv = new Date();
    const optionsTimeMin = {
        minute: 'numeric'
    }
    const optionsTimeHour = {
        hour: 'numeric'
    }
    const currentHour = Number(timeAdv.toLocaleString('ru',optionsTimeHour));
    const currentMin = Number(timeAdv.toLocaleString('ru',optionsTimeMin));
    requestMin.innerHTML = currentMin;
    requestHour.forEach(requestHourItem => {
        successMin.innerHTML = currentMin + 5;
        moneyMin.innerHTML = currentMin + 8;
        requestHourItem.innerHTML = currentHour;
        if(moneyMin.innerHTML >= 60) {
            requestHour[2].innerHTML = currentHour + 1;
            moneyMin.innerHTML = '08';
        };
        if(successMin.innerHTML >= 60) {
            requestHour[1].innerHTML = currentHour + 1;
            successMin.innerHTML = '02';
        };
    });
    if(currentMin < 10) {
        requestMin.innerHTML = "0" + currentMin;
    }
};
timeUpdate();
setInterval(timeUpdate, 1000);
//Онлайн табло
const process = document.querySelectorAll('.table__process');
process.forEach(processItem => {
    function processStep() {
        processText = processItem.querySelector('.table__process-text');
        processDot = processItem.querySelector('.table__process-icons');
        processIcon = processDot.querySelectorAll('.icon')
        if(processIcon.length < 5) {
            newIcon = document.createElement('div');
            newIcon.classList.add('icon');
            processDot.appendChild(newIcon);
        }
        if(processIcon.length === 0) {
            processText.innerHTML = 'Получена заявка'
        }
        if(processIcon.length === 1) {
            processText.innerHTML = 'Проверка документов'
        }
        if(processIcon.length === 2) {
            processText.innerHTML = 'Одобрение заявки'
        }
        if(processIcon.length === 3) {
            processText.innerHTML = 'Подготовка документов'
        }
        if(processIcon.length === 4) {
            processText.innerHTML = 'Получение денег'
        }
        if(processIcon.length === 4) {
            function successProcess() {
                newSuccessIcon = document.createElement('div');
                newSuccessIcon.classList.add('icon-success');
                processDot.appendChild(newSuccessIcon);
                newIcon.classList.add('icon-stop');
                processIcon.forEach(processIconItem => {
                    processIconItem.classList.add('icon-stop')
                })
            }
            successProcess();
        }
    }
    processStep();
    setInterval(processStep, 60000);
});
//Слайдер
const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1028: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  });

//Меню
const icon = document.querySelector('.header__menu-dotted');
const menu = document.querySelector('.menu');

icon.addEventListener('click', () => {
    icon.classList.toggle('icon-open');
    menu.classList.toggle('menu-show');

});