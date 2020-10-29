import './style.scss';
// ici je charge jquery dans mon js
import $ from 'jquery';

// import axios from 'axios';

$('image').on('click', function () {
  $('body').css({
    backgroundImage: 'url(chaton.png)',
  });
  $('body').prepend('<im />');
});
$('phrase').on('click', function () {
  $('body').prepend('<p>trop kawai!!!</p>');
});

// $('toto'); même chose que
// document.querySelectorAll('toto');
// ou encore funtion $ (){ return document.querySelectorAll('toto');}
