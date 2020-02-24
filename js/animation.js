//animacja przycisku
(function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.menu').toggleClass('menu_state_open');
      });
    });
  })(jQuery); 
//animacja przycisku

//якоря
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 500,
      framesCount = 20;
anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});


//losowanie ciekawostek
var i = 0;
var answers = [
"Ziemia jest jedyną planeta w naszym układzie sloniecznym, której nazwa nie pochodzi od imieniu boga.",
"W Chinach zakazane jest przytulanie drzwi",
"Potrzeba ponad 60 tysięcy lat, aby obejrzeć wszystkie filmiki zamieszczone obecnie na Youtube.",
"Dwie trzecie populacji na świecie nigdy nie widziało śniegu.",
"Hymn Królestwa Hiszpanii nie ma słów.",
'Howard Hughes – amerykański miliarder i konstruktor lotniczy kupił kasyno tylko po to, by usunąć z niego neon, który widział ze swojego okna.',
"Jeden dzień na Ziemi trwa dłużej niż jeden rok na Wenus.",
"Wydry podczas snu trzymają się nawzajem za łapki, żeby nie odpłynąć od siebie.",
"Istnieje więcej możliwości ruchów w szachach niż atomów we wszechświecie.",
"Na twoim ciele znajduje się więcej organizmów żywych niż ludzi na ziemi.",
"Przeciętny wysportowany człowiek przechodzi w swoim życiu dystans równy pięciu pokrążeniom ziemi.",
"„Dollar Babies” to inicjatywa wymyślona przez Stephena Kinga, żeby wspierać początkujących filmowców. Autor udziela takim osobom prawa do adaptacji jednej ze swoich książek za symbolicznego dolara. Zastrzeżenie jest jednak aby filmy nie były szeroko rozpowszechniane, oprócz festiwali filmowych – tak, żeby twórca mógł zostać dostrzeżony przez krytyków.",
"Aby wypić całą krew z organizmu człowieka potrzeba by około miliona komarów."

];

$(function () {
$('.panel-text').click(function () {
i = Math.floor(Math.random() * answers.length)
showText(this, answers[i]);
}); ;
function showText(panel, text) {
var panel = $(panel);
var msg = $('.message', panel);
panel.fadeOut(500, function () {
msg.html(text);
panel.fadeIn(500);
});
}
});
function showText(){
  i = Math.floor(Math.random() * answers.length);
  message.innerHTML = answers[i];
  setTimeout(showText, Math.random() * 20000);
}
showText();




