// Flash Card Starter
(function(){
  'use strict';
  var cards = [
    { front: 'What does DOM stand for?', back: 'Document Object Model' },
    { front: 'Select a single element?', back: 'document.querySelector' },
    { front: 'Add a click listener?', back: "element.addEventListener('click', handler)" }
  ];

  var current = 0;
  var showingFront = true; // ensure valid JS (we'll set false below)

  var app = document.getElementById('app');
  var card = document.createElement('div');
  card.id = 'card';
  card.className = 'card';
  app.appendChild(card);

  var controls = document.createElement('div');
  controls.className = 'row controls';
  var nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next';
  controls.appendChild(nextBtn);
  app.appendChild(controls);

  function render(){
    var c = cards[current];
    card.textContent = showingFront ? c.front : c.back;
  }

  card.addEventListener('click', function(){
    showingFront = !showingFront;
    render();
  });

  nextBtn.addEventListener('click', function(){
    current = (current + 1) % cards.length;
    showingFront = true;
    render();
  });

  // initial render
  showingFront = true;
  render();
})();