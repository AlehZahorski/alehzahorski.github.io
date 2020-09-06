const btn = document.getElementById('myCv');
const input = document.getElementById('idPass');
const windowPass = document.getElementById('window-password');
const pushPassword = document.getElementById('pushPassword');
const div = document.getElementById('forText');
const idCV = document.getElementById('idCV');
const imgCloseWin = document.getElementById('imgCloseWindow');
const formCloseWin = document.getElementById('formCloseWin');
const labelCloseWin = document.getElementById('labelCloseWin');



let passwordTrue = 2^3+(10*190+16);



const downloadCv = () => {

windowPass.classList.toggle('showWindowWithPass');
imgCloseWin.classList.remove('displayNoneForAll');
formCloseWin.classList.remove('displayNoneForAll');
labelCloseWin.classList.remove('displayNoneForAll');
input.classList.remove('displayNoneForAll');
pushPassword.classList.remove('displayNoneForAll');
div.classList.remove('displayNoneForAll');
div.classList.add('fontText');



pushPassword.addEventListener('click', function(e){
    e.preventDefault();
    if(input.value == passwordTrue){
        div.textContent = 'Haslo jest okej, mozesz pobrac CV';   
        idCV.classList.add('showButton');
        idCV.href = "img/cv/aleh_zahorskiCV.pdf";
    } else{
        div.textContent = `haslo "${input.value}" nie jest prawidlowe`;
        idCV.classList.remove('showButton');
    }   
})
}


btn.addEventListener('click', downloadCv);
imgCloseWin.addEventListener('click', function(){

    windowPass.classList.toggle('showWindowWithPass');
    idCV.classList.remove('showButton');
    imgCloseWin.classList.add('displayNoneForAll');
    formCloseWin.classList.add('displayNoneForAll');
    labelCloseWin.classList.add('displayNoneForAll');
    input.classList.add('displayNoneForAll');
    pushPassword.classList.add('displayNoneForAll');
    div.classList.add('displayNoneForAll');

    input.value = '';
    div.textContent = '';
})
// finish password's window

// 1)создать див которая в котором будет класс скрывающий его в нативном режиме ГОТОВО
// 2)добавить стили как в примере с паролем ГОТОВО
// 3)добавить ссылки на страницы(убрать их же с хтмл) ГОТОВО
// 4)добавить описание для каждой ссылки и возможность открыть гитхаб(код)  ГОТОВО
// или страницу в онлайн режиме
// 5)добавить анимацию в окошко открывающееся 


const btnProject1 = document.getElementById('btn-project1');
const btnProject2 = document.getElementById('btn-project2');
const btnProject3 = document.getElementById('btn-project3');
const btnProject4 = document.getElementById('btn-project4');
const btnProject5 = document.getElementById('btn-project5');
const btnProject6 = document.getElementById('btn-project6');
const projectDisplayImage = document.getElementById('projectDisplayImage');
const closeWindowProject = document.getElementById('closeWindowProject');

const projectWindow = document.getElementById('projectWindow');

const firstButton = document.getElementById('firstButton');
const secondButton = document.getElementById('secondButton');
const descriptionProject = document.getElementById('descriptionProject');
const firstProjectImage = document.getElementById('firstProjectImage');
const secondProjectImage = document.getElementById('secondProjectImage');
const thirdProjectImage = document.getElementById('thirdProjectImage');
const fourProjectImage = document.getElementById('fourProjectImage');
const fiveProjectImage = document.getElementById('fiveProjectImage');
const sixProjectImage = document.getElementById('sixProjectImage');
const thirdLi = document.getElementById('thirdLi');
const secondLi = document.getElementById('secondLi');


const clickForOpenWindow1 = () =>{
    projectWindow.classList.remove('displayNoneProject');
    firstProjectImage.classList.remove('displayNoneProject');
    thirdProjectImage.classList.add('displayNoneProject');
    fourProjectImage.classList.add('displayNoneProject');
    secondProjectImage.classList.add('displayNoneProject');
    fiveProjectImage.classList.add('displayNoneProject');
    sixProjectImage.classList.add('displayNoneProject');
    descriptionProject.textContent = 'W tym projekcie głównym celem dla mnie było nauczyć się posługiwać API, czyli wprost mówiąc w jaki sposób dane się pobierają i w jaki sposób się wyświetlają. Myślę że dało się ogarnąć ten temat w miarę dobrze.'
    firstButton.href = "https://alehzahorski.github.io/your-weather/";
    secondButton.href = "https://github.com/AlehZahorski/your-weather";
    secondLi.textContent = "CSS"
    thirdLi.textContent = "Javascript: API,AJAX"
}

const clickForOpenWindow2 = () =>{
    projectWindow.classList.remove('displayNoneProject');
    firstProjectImage.classList.add('displayNoneProject');
    secondProjectImage.classList.remove('displayNoneProject');
    thirdProjectImage.classList.add('displayNoneProject');
    fourProjectImage.classList.add('displayNoneProject');
    fiveProjectImage.classList.add('displayNoneProject');
    sixProjectImage.classList.add('displayNoneProject');
    descriptionProject.textContent = 'Ten project zacząłem robić jeszcze w środku 2019 roku i będę go rozwiał dalej, ponieważ jest to dobry teram żeby sobie przećwiczyć Javascript(czym teraz głównie się zajmuje). W planach uzupełnić sekcje "message" i później próbować dodawać użytkowników.'
    firstButton.href = "https://alehzahorski.github.io/social_network/";
    secondButton.href = "https://github.com/AlehZahorski/social_network";
    secondLi.textContent = "CSS: module.css"
    thirdLi.textContent = "Javascript: React(Redux)"
}

const clickForOpenWindow3 = () =>{
    projectWindow.classList.remove('displayNoneProject');
    firstProjectImage.classList.add('displayNoneProject');
    secondProjectImage.classList.add('displayNoneProject');
    thirdProjectImage.classList.remove('displayNoneProject');
    fourProjectImage.classList.add('displayNoneProject');
    fiveProjectImage.classList.add('displayNoneProject');
    sixProjectImage.classList.add('displayNoneProject');
    descriptionProject.textContent = 'To jest dość prosty layout designe ktorego pobralem z internetu, na tym sobie przećwiczyłem bootstrapa. '
    firstButton.href = "https://alehzahorski.github.io//newProvidence/";
    secondButton.href = "https://github.com/AlehZahorski//newProvidence";
    secondLi.textContent = "CSS: Bootstrap"
    thirdLi.textContent = "Javascript: jQuery"
}

const clickForOpenWindow4 = () =>{
    projectWindow.classList.remove('displayNoneProject');
    firstProjectImage.classList.add('displayNoneProject');
    secondProjectImage.classList.add('displayNoneProject');
    thirdProjectImage.classList.add('displayNoneProject');
    fourProjectImage.classList.remove('displayNoneProject');
    fiveProjectImage.classList.add('displayNoneProject');
    sixProjectImage.classList.add('displayNoneProject');
    descriptionProject.textContent = 'Zwykly layout pobrany z internetu. Stylowany za pomoca sass zebrany za pomoca gulp.'
    firstButton.href = "https://alehzahorski.github.io/gangland/";
    secondButton.href = "https://github.com/AlehZahorski//gangland";
    secondLi.textContent = "CSS: Sass"
    thirdLi.textContent = "Javascript: Gulp"
}

const clickForOpenWindow5 = () =>{
    projectWindow.classList.remove('displayNoneProject');
    firstProjectImage.classList.add('displayNoneProject');
    secondProjectImage.classList.add('displayNoneProject');
    thirdProjectImage.classList.add('displayNoneProject');
    fourProjectImage.classList.add('displayNoneProject');
    fiveProjectImage.classList.remove('displayNoneProject');
    sixProjectImage.classList.add('displayNoneProject');
    descriptionProject.textContent = 'Pomysl na te apke powstal po tym jak przerobilem kurs samurajJs, lecz chcialem to zrobic z zapisywaniem do localstorage, wiec postanowilem sie nauczyc poslugiwac localstorage.'
    firstButton.href = "https://alehzahorski.github.io/todo/";
    secondButton.href = "https://github.com/AlehZahorski/todo";
    secondLi.textContent = "CSS"
    thirdLi.textContent = "Javascript: just js"
}

const clickForOpenWindow6 = () =>{
    projectWindow.classList.remove('displayNoneProject');
    firstProjectImage.classList.add('displayNoneProject');
    secondProjectImage.classList.add('displayNoneProject');
    thirdProjectImage.classList.add('displayNoneProject');
    fourProjectImage.classList.add('displayNoneProject');
    fiveProjectImage.classList.add('displayNoneProject');
    sixProjectImage.classList.remove('displayNoneProject');
    descriptionProject.textContent = 'Nadal sie bawie z localstorage lecz do tego dodalem jeszcze paradygmaty OOP, chce w przyszlosci stworzyc swoj wlasny sklep internetowy(na react) wiec wiedza odnosnie tego bardzo przydatna :)'
    firstButton.href = "https://alehzahorski.github.io/cart/";
    secondButton.href = "https://github.com/AlehZahorski/cart";
    secondLi.textContent = "CSS"
    thirdLi.textContent = "Javascript: just js"
}


closeWindowProject.addEventListener('click', function(){
    projectWindow.classList.add('displayNoneProject');
    firstProjectImage.classList.add('displayNoneProject');
    secondProjectImage.classList.add('displayNoneProject');
    thirdProjectImage.classList.add('displayNoneProject');
    fourProjectImage.classList.add('displayNoneProject');
    fiveProjectImage.classList.add('displayNoneProject');
    sixProjectImage.classList.add('displayNoneProject');
})

btnProject1.addEventListener('click', clickForOpenWindow1);
btnProject2.addEventListener('click', clickForOpenWindow2);
btnProject3.addEventListener('click', clickForOpenWindow3);
btnProject4.addEventListener('click', clickForOpenWindow4);
btnProject5.addEventListener('click', clickForOpenWindow5);
btnProject6.addEventListener('click', clickForOpenWindow6);

