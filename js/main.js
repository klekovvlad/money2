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
    }
    processStep();
    setInterval(processStep, 60000);
});

