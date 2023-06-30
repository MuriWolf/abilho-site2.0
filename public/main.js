import Typewriter from 'typewriter-effect/dist/core';
var typewriterEl = document.getElementById('typewriter');
var typewriter =  new Typewriter(typewriterEl, {
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
    delay: 75,
  });

  typewriter
  .typeString('A simple yet powerful native javascript')
  .pauseFor(300)
  .start();