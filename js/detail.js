// js/detail.js

function showPlayerModal(player) {
  // Set the modal’s title to the player’s name
  document.getElementById('modalName').textContent = `${player.firstName} ${player.lastName}`;

  // Set only their fun fact / skill
  document.getElementById('modalDetail').textContent = player.detail || 'No fun fact available.';
}
