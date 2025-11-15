// Timed Quiz Scaffold
(function(){
  'use strict';

  var questions = [
    { q: 'What does DOM stand for?', choices: ['Data Object Map','Document Object Model','Document Oriented Markup'], answer: 1 },
    { q: 'Strict equality operator?', choices: ['==','===','!='], answer: 1 },
    { q: 'Method to select one element?', choices: ['getElementsByClassName','querySelectorAll','querySelector'], answer: 2 },
    { q: 'Add an event listener?', choices: ['onClick','addEventListener','attachEvent'], answer: 1 },
    { q: 'LocalStorage stores…', choices: ['Only objects','Only numbers','Strings'], answer: 2 },
    { q: 'Stop an interval?', choices: ['cancelInterval','clearInterval','stopInterval'], answer: 1 },
    { q: 'Array last index?', choices: ['length','length-1','length+1'], answer: 1 },
    { q: 'Prevent form default?', choices: ['event.preventDefault()','event.stop()','event.block()'], answer: 0 },
    { q: 'Create element?', choices: ['document.makeElement','document.createElement','new HTMLElement()'], answer: 1 },
    { q: 'Get attribute?', choices: ['el.attr()','el.getAttribute()','el.attribute()'], answer: 1 }
  ];

  var idx = 0;
  var score = 0;
  var timeLeft = 60;
  var timerId = null;

  var app = document.getElementById('app');

  function render(){
    app.innerHTML = '';

    var info = document.createElement('div');
    info.className = 'info';
    info.textContent = 'Time: ' + timeLeft + 's  |  Score: ' + score + '/' + questions.length;
    app.appendChild(info);

    if(idx >= questions.length || timeLeft <= 0){
      var h = document.createElement('h2');
      h.textContent = 'Quiz Over';
      var p = document.createElement('p');
      p.textContent = 'Final Score: ' + score + '/' + questions.length;
      app.appendChild(h);
      app.appendChild(p);
      if(timerId){ clearInterval(timerId); }
      return;
    }

    var q = questions[idx];
    var h2 = document.createElement('h2');
    h2.textContent = 'Q' + (idx+1) + ': ' + q.q;
    app.appendChild(h2);

    for(var i=0;i<q.choices.length;i++){
      var b = document.createElement('button');
      b.className = 'btn';
      b.textContent = q.choices[i];
      (function(choiceIndex){
        b.addEventListener('click', function(){
          if(choiceIndex === q.answer){ score++; }
          idx++;
          render();
        });
      })(i);
      app.appendChild(b);
    }
  }

  function startTimer(){
    timerId = setInterval(function(){
      timeLeft--;
      if(timeLeft < 0){ timeLeft = 0; }
      if(timeLeft === 0){ clearInterval(timerId); }
      render();
    }, 1000);
  }

  startTimer();
  render();
})();