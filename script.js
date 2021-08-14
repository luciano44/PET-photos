const picture = document.querySelector('.picture img')
const load = document.querySelector('.load')

const dog = 'https://dog.ceo/api/breeds/image/random'
const cat = 'https://cataas.com/cat?json=true'
let fullscreenImg = ''

let spin = 0

function fetchPet(pet){
    fetch(pet)
        .then(res => res.json())
        .then(res => {
            if(res.message){
                picture.setAttribute('src', res.message)
                fullscreenImg = res.message
            }else{
                picture.setAttribute('src', 'https://cataas.com'+res.url)
                fullscreenImg = 'https://cataas.com'+res.url
            }
        })
        .then(res => {
            setTimeout(() => {
                load.style.filter = `opacity(0)`
            },750)
        })
        .catch(err => {
            console.error(err)
        })

        load.style.transform = `rotate(${spin}deg)`
        load.style.filter = `opacity(1)`
        spin += 360
}

function goTo(){
    window.open(fullscreenImg,'_blank')
}

fetchPet(dog)