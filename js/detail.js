// js/detail.js

document.addEventListener('DOMContentLoaded', () => {
  // Wait a short moment to ensure roster.js has already rendered all cards.
  // (If roster.js runs on DOMContentLoaded, this will queue behind it.)
  setTimeout(() => {
    const grid = document.getElementById('rosterGrid');
    if (!grid) return;

    // Find every card in the order they were appended
    const cards = Array.from(grid.querySelectorAll('.card'));

    cards.forEach((card, idx) => {
      // Create a hidden <p> for the detail text
      const detailPara = document.createElement('p');
      detailPara.className = 'hidden-detail d-none small p-2 mt-2 text-white bg-knicks-orange rounded';
      detailPara.textContent = players[idx].detail || 'No detail available.';

      // Append it under the card-body
      const body = card.querySelector('.card-body');
      body.appendChild(detailPara);

      // Find that "Click Me!" button inside this card
      const btn = body.querySelector('button');
      btn.addEventListener('click', () => {
        // Toggle the detail <p> on/off
        detailPara.classList.toggle('d-none');
      });
    });
  }, 50);
});
