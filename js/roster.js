document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('rosterGrid');

  const render = list => {
    grid.innerHTML = '';

    list.forEach((player, index) => {
      const col = document.createElement('div');
      col.className = 'col-6 col-lg-2';

      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img 
            src="${player.photo_1}" 
            class="card-img-top" 
            alt="${player.firstName} ${player.lastName}"
          >
          <div class="card-body text-center">
            <h5 class="card-title mb-1">
              ${player.firstName} ${player.lastName}
            </h5>
            <div 
              class="text-primary badge badge-position badge-pos-${player.position}"
            >
              ${player.position}
            </div>
            <p class="small text-muted mb-2">Age ${player.age}</p>
            <!-- Placeholder for conditional element (e.g., “Veteran” badge) -->
            <div class="conditional-container"></div>
            <button
              class="btn btn-sm btn-primary show-info-btn"
              data-player-index="${index}"
            >
              More Info
            </button>
          </div>
        </div>
      `;

      grid.appendChild(col);

      if (player.age > 30) {
        const veteranBadge = document.createElement('span');
        veteranBadge.textContent = 'Veteran';
        veteranBadge.className = 'badge bg-knicks-orange fw-semibold small';
        col.querySelector('.conditional-container').appendChild(veteranBadge);
      }
    });

    document.querySelectorAll('.show-info-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const idx = Number(this.dataset.playerIndex);
        const player = team.players[idx];

        showPlayerModal(player);

        const modalElement = document.getElementById('playerModal');
        const bootstrapModal = new bootstrap.Modal(modalElement);
        bootstrapModal.show();
      });
    });
  };

  render(team.players);
});
