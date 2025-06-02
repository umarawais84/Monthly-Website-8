document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('rosterGrid');

  const render = list => {
    grid.innerHTML = '';
    list.forEach((player, index) => {
      const col = document.createElement('div');
      col.className = 'col-6 col-lg-2';

      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${player.photo_1}" class="card-img-top" alt="${player.firstName} ${player.lastName}">
          <div class="card-body text-center">
            <h5 class="card-title mb-1">${player.firstName} ${player.lastName}</h5>
            <div class="text-primary badge badge-position badge-pos-${player.position}">${player.position}</div>
            <p class="small text-muted mb-2">Age ${player.age}</p>
            <button 
              class="btn btn-sm btn-primary show-info-btn" 
              data-player-index="${index}" 
              data-bs-toggle="modal" 
              data-bs-target="#playerModal">
              More Info
            </button>
          </div>
        </div>
      `;

      grid.appendChild(col);
    });
  };

  render(team.players);

  grid.addEventListener('click', function (e) {
    if (e.target.classList.contains('show-info-btn')) {
      const index = e.target.getAttribute('data-player-index');
      const player = players[index];
      showPlayerModal(player);
    }
  });
});
