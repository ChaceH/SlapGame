const blackKnight = {
name: 'Black Knight',
health: 100,
hits: 0
}

let enemy = document.getElementById('name')

const enemyName = document.getElementById('name')
const health = document.getElementById('health')
const hits = document.getElementById('hits')

function draw(){
    enemy.innerText = blackKnight.name
    health.innerText = blackKnight.health.toString()
    hits.innerText = blackKnight.hits.toString()
}


function slap(){
    blackKnight.health--;
    blackKnight.hits++;
    draw()
}

function punch(){
    blackKnight.health-=5
    blackKnight.hits++
    draw()
}

function kick(){
    blackKnight.health-=10
    blackKnight.hits++
    draw()
}

function reset(){
    blackKnight.health = 100
    blackKnight.hits = 0
    draw()
}


draw()