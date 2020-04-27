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

//1) нужно создать окно которое будет находится по середине странице в любом случае в позиции фиксед
// 2)Нужно скрыть это окно в обычном режиме
// 3)добавлять дисплей шоу при клике кнопки
// 4)в этом окне должно быть поле ввода пароля и кнопка
// 5)введенные данные должны сопоставляться с паролем в базе данных 
// 6)если все ок - открывает ссылку на пдф файл
// 7)если нет - посылает нахуй


