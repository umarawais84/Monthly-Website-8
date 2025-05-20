document.addEventListener('DOMContentLoaded', () => {

    const grid = document.getElementById('rosterGrid')

    const render = list => {
        grid.innerHTML = ''
        list.forEach(p => {
            const col = document.createElement('div')
            col.className = 'col-6 col-lg-2'

            col.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <img src="${p.photo}" alt="${p.firstName} ${p.lastName}" class="card-img-top">
                    <div class="card-body text-center">
                        <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
                        <div class="badge badge-position badge-pos-${p.position}">${p.position}</div>
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
