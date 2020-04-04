//animacja przycisku
(function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.menu').toggleClass('menu_state_open');
      });
    });
  })(jQuery); 
  (function($){
    $(function() {
      $('.menu__links-item').on('click', function() {
        $(this).closest('.menu').toggleClass('menu_state_open');
      });
    });
  })(jQuery); 
  
//animacja przycisku

//якоря
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
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


window.addEventListener('scroll', function(){
  console.log('loooooo leciiiiiimy');
})



