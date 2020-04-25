const btn = document.getElementById('myCv');
const input = document.getElementById('idPass');
const windowPass = document.getElementById('window-password');
const pushPassword = document.getElementById('pushPassword');
const div = document.getElementById('forText');
const idCV = document.getElementById('idCV')

let passwordTrue = 1917;

const downloadCv = () => {
console.log('jest ok');
windowPass.classList.toggle('pass-show');
console.log('klasa zostala dodana');
pushPassword.addEventListener('click', function(e){
    e.preventDefault();
    if(input.value == passwordTrue){
        div.textContent = 'Haslo jest okej, mozesz pobrac CV';   
        idCV.classList.add('showButton')
    } else{
        div.textContent = `haslo "${input.value}" nie jest prawidlowe`;
    }
    
    
})

}

btn.addEventListener('click', downloadCv);

//1) нужно создать окно которое будет находится по середине странице в любом случае в позиции фиксед
// 2)Нужно скрыть это окно в обычном режиме
// 3)добавлять дисплей шоу при клике кнопки
// 4)в этом окне должно быть поле ввода пароля и кнопка
// 5)введенные данные должны сопоставляться с паролем в базе данных 
// 6)если все ок - открывает ссылку на пдф файл
// 7)если нет - посылает нахуй