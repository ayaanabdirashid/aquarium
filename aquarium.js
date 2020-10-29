import './style.scss';
// ici je charge jquery dans mon js
import $ from 'jquery';

var aquarium = $('.container').css({
  position: 'absolute',
});

var poisson1 = $('.poisson1').css({
  position: 'relative',
  top: '40%',
  left: '40%',

});

var poisson2 = $('.poisson2').css({
  position: 'relative',
  top: '75%',
  left: '85%',

});

var poisson3 = $('.poisson3').css({
  position: 'relative',
  top: '12%',
  left: '12%',

});
var poisson4 = $('.poisson4').css({
  position: 'relative',
  top: '35%',
  left: '55%',

});

var algues = $('.algues').css({
  position: 'relative',
});
var clonePoisson = $('.poisson4').clone().appendTo('body');

$('body').append(aquarium, poisson1, poisson2, poisson3, poisson4, algues, clonePoisson);

// $('body').append(clonePoisson).css({
//   // width: '550px',
//   // height: '150px',
//   // top: '70%',
//   // left: '12%',
// });

var translate = $('.poisson3').animate({
  transform: 'translateX(50px)',
});
console.log(translate);

setInterval(function () {
  $('poisson2').css({
    transform: 'translate3d(15px, 60px, 0)',
  });
}, 2000);

// setInterval(function() {
//   var transform =
// })

// setInterval(function () {
//   $('.poisson1').clone().insertAfter('.poisson1');
// }, 3000);
