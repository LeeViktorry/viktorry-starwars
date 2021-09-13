const baseurl = 'https://swapi.dev/api'

const center = document.querySelector('.rows')


function getData(url , cb){
    fetch(`${baseurl}/${url}`)
    .then(res => res.json())
    .then(r =>{
        cb(r)
    } )
}

const people = document.querySelector('.people')

people.addEventListener('click' , e =>{
    e.preventDefault();
    getData('people', res =>{
        console.log(res.results);
        const Card = res.results.map(item =>{
            return `
                <div class="cardinfo1">
                    <div class="cardinfo2">
                        <div class="cardinfo">
                            <h3>${item.name}</h3>
                            <hr>
                            <h5>Eye-Color:  ${item.eye_color}</h5>
                            <h5>Hair-Color:  ${item.hair_color}</h5>
                            <h5>Height: ${item.height}</h5>
                            <h5>Massa: ${item.mass}</h5>
                            <h5>Skin-Color: ${item.skin_color}</h5>
                            <h5>Birth-Year: ${item.birth_year}</h5>
                        </div>
                    </div>
                </div>
            `
        }).join('')
        center.innerHTML = Card
    })

})






const planet = document.querySelector('.planets')

planet.addEventListener('click' , e =>{
    e.preventDefault();
    getData('planets', res =>{
        console.log(res.results);
        const Card = res.results.map(item =>{
            return `
                <div class="cardinfo1">
                    <div class="cardinfo2">
                        <div class="cardinfo">
                            <h3>Name: ${item.name}</h2>
                            <hr>
                            <h5>Diameter: ${item.diameter}</h3>
                            <h5>Gravity: ${item.gravity}</h3>
                            <h5>Population: ${item.population}</h3>
                            <h5>Obital period: ${item.orbital_period}</h3>
                        </div>
                    </div>
                </div>
            `
        }).join('')
        center.innerHTML = Card
    })

})