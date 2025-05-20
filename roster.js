document.addEventListener('DOMContentLoaded', () => {

    const grid = document.getElementById('rosterGrid')

    const render = list => {
        grid.innerHTML = ''
        list.forEach(p => {
            const col = document.createElement('div')
            col.className = 'col-6 col-lg-2'

            col.innerHTML = `
                <div class="card h-100 shadow-sm">
                <div class="carousel-item active">
      <img class="d-block w-100" src="${p.photo_1}" alt="${p.firstName} ${p.lastName}">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
                    <div class="card-body text-center">
                        <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
                        <div class="text-primary badge badge-position badge-pos-${p.position}">${p.position}</div>
                        <p class="small text-muted mb-0">Age ${p.age}</p>
                        <button type="button" class="btn btn-primary">Click Me!</button>
                    </div>
                </div>
            `
            grid.appendChild(col)
        })


    }








    render(players)
})
