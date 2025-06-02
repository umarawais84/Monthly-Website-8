function showPlayerModal(player) {
  // Populate modal elements:
  const photoElem = document.getElementById('modalPhoto');
  photoElem.src = player.photo_1;
  photoElem.alt = `${player.firstName} ${player.lastName}`;

  document.getElementById('modalName').textContent = `${player.firstName} ${player.lastName}`;
  document.getElementById('modalPosition').textContent = player.position;
  document.getElementById('modalAge').textContent = `Age ${player.age}`;
  document.getElementById('modalDetail').textContent = player.detail || 'No detail available.';
}
