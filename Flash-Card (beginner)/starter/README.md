# Flash Card — Beginner Challenge (Starter Included)

## Goal
Build a simple flash card viewer that flips between front/back and can advance to the next card. Cards come from an **array of objects**.

## Requirements
- Use an array like:
  ```js
  var cards = [
    { front: 'What does DOM stand for?', back: 'Document Object Model' },
    { front: 'Method to select one element?', back: 'document.querySelector' }
  ];
  ```
- Show the **front** by default. Clicking the card flips to **back** (and back again).
- A **Next** button shows the next card (wrap to the first after the last).
- **Stretch:** Track current index in `localStorage` so refresh restores the same card.

## Submission
- Repo URL + GitHub Pages URL.
