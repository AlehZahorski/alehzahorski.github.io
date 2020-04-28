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
        idCV.href = "aleh_zahorskiCV.pdf";
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
// 2)добавить стили как в примере с паролем
// 3)добавить ссылки на страницы(убрать их же с хтмл)
// 4)добавить описание для каждой ссылки и возможность открыть гитхаб(код) 
// или страницу в онлайн режиме
// 5)добавить анимацию в окошко открывающееся

const btnProject1 = document.getElementById('btn-project1');
const btnProject2 = document.getElementById('btn-project2');
const btnProject3 = document.getElementById('btn-project3');
const projectDisplayImage = document.getElementById('projectDisplayImage');
const closeWindowProject = document.getElementById('closeWindowProject');

const projectWindow = document.getElementById('projectWindow');

const firstButton = document.getElementById('firstButton');
const secondButton = document.getElementById('secondButton');
const descriptionProject = document.getElementById('descriptionProject');
const firstProjectImage = document.getElementById('firstProjectImage');


const clickForOpenWindow1 = () =>{
    projectWindow.classList.remove('displayNoneProject');
    firstProjectImage.classList.remove('displayNoneProject');
    descriptionProject.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident explicabo atque nam magni quos, consequatur voluptatum reiciendis adipisci, excepturi officia error soluta obcaecati rem? Vitae similique velit suscipit numquam consequatur?'
    firstButton.href = "https://alehzahorski.github.io/your-weather/";
    secondButton.href = "https://github.com/AlehZahorski/your-weather";


}


closeWindowProject.addEventListener('click', function(){
    projectWindow.classList.add('displayNoneProject');
})

btnProject1.addEventListener('click', clickForOpenWindow1);
// btnProject2.addEventListener('click', clickForOpenWindow);
// btnProject3.addEventListener('click', clickForOpenWindow);

