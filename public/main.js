var element = document.getElementById('headerText');
const typewriter = new Typewriter(element, {
  autoStart: true,
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Links úteis')
  .pauseFor(2000)
  .deleteAll()
  .typeString('Seu negócio mais profissional')
  .pauseFor(2000)
  .deleteAll()
  .typeString('Criativos que vendem')
  .pauseFor(2000)
  .start();


function newFunction() {
  console.log("Anything")
}