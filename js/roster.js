// js/roster.js

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('rosterGrid');

  const render = list => {
    grid.innerHTML = '';

    list.forEach((player, index) => {
      // Create column wrapper
      const col = document.createElement('div');
      col.className = 'col-6 col-lg-2';

      // Build the card’s inner HTML
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

      // Append the card to the grid
      grid.appendChild(col);

      // -------------- CONDITIONAL ELEMENT CREATION --------------
      // If player is older than 30, add a small "Veteran" badge inside .conditional-container
      if (player.age > 30) {
        const veteranBadge = document.createElement('span');
        veteranBadge.textContent = 'Veteran';
        veteranBadge.className = 'badge bg-knicks-orange fw-semibold small';
        // Append under the age line
        col.querySelector('.conditional-container').appendChild(veteranBadge);
      }
      // ----------------------------------------------------------
    });

    // After all cards are in the DOM, attach individual click handlers
    document.querySelectorAll('.show-info-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        // Inside this function, 'this' === the clicked button
        const idx = Number(this.dataset.playerIndex);
        const player = team.players[idx];

        // Populate modal fields
        showPlayerModal(player);

        // Manually open the Bootstrap modal
        const modalElement = document.getElementById('playerModal');
        const bootstrapModal = new bootstrap.Modal(modalElement);
        bootstrapModal.show();
      });
    });
  };

  // Render using the team object
  render(team.players);
});
