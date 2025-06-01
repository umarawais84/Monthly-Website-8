document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('rosterGrid');

  const render = list => {
    grid.innerHTML = '';
    list.forEach((p, idx) => {
      const col = document.createElement('div');
      col.className = 'col-6 col-lg-2';

      // Assign a unique carousel ID based on the index (idx)
      const carouselId = `carousel-${idx}`;

      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <!-- START Carousel Wrapper -->
          <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <!-- First slide: photo_1 -->
              <div class="carousel-item active">
                <img class="d-block w-100" src="${p.photo_1}" alt="${p.firstName} ${p.lastName}">
              </div>
              <!-- Second slide: photo_2 (if provided) -->
              <div class="carousel-item">
                <img class="d-block w-100" src="${p.photo_2 || p.photo_1}" alt="${p.firstName} ${p.lastName} (alt)">
              </div>
            </div>
            <!-- Carousel Controls -->
            <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <!-- END Carousel Wrapper -->

          <div class="card-body text-center">
            <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
            <div class="text-primary badge badge-position badge-pos-${p.position}">${p.position}</div>
            <p class="small text-muted mb-0">Age ${p.age}</p>
            <button type="button" class="btn btn-primary detail-btn">Click Me!</button>
          </div>
        </div>
      `;

      grid.appendChild(col);
    });
  };

  render(players);
});
