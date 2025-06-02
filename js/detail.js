function showPlayerModal(player) {
  // Only show the player’s name and fun fact (detail)
  document.getElementById('modalName').textContent = 
    `${player.firstName} ${player.lastName}`;

  document.getElementById('modalDetail').textContent = 
    player.detail || 'No fun fact available.';
}
