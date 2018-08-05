const blackKnight = {
    name: 'Black Knight',
    health: 100,
    hits: 0
}

let enemy = document.getElementById('name')

const enemyName = document.getElementById('name')
const health = document.getElementById('health')
const hits = document.getElementById('hits')
const slapButton = document.getElementById('slap')
const punchButton = document.getElementById('punch')
const kickButton = document.getElementById('kick')

function draw() {
    enemy.innerText = blackKnight.name
    health.innerText = blackKnight.health.toString()
    hits.innerText = blackKnight.hits.toString()
}


function slap() {
    blackKnight.health--;
    blackKnight.hits++;
    if (blackKnight.health == 0) {
        slapButton.disabled = true
    }
    if (blackKnight.health == 0) {
        punchButton.disabled = true
    }
    if (blackKnight.health == 0) {
        kickButton.disabled = true
    }
    draw()
}

function punch() {
    blackKnight.health -= 5
    blackKnight.hits++;
    if (blackKnight.health == 0) {
        punchButton.disabled = true
    }
    if (blackKnight.health == 0) {
        slapButton.disabled = true
    }
    if (blackKnight.health == 0) {
        kickButton.disabled = true
    }
    draw()
}

function kick() {
    blackKnight.health -= 10
    blackKnight.hits++;
    if (blackKnight.health == 0) {
        kickButton.disabled = true
    }
    if (blackKnight.health == 0) {
        slapButton.disabled = true
    }
    if (blackKnight.health == 0) {
        punchButton.disabled = true
    }
    draw()
}

function reset() {
    blackKnight.health = 100
    blackKnight.hits = 0
    slapButton.disabled = false
    punchButton.disabled = false
    kickButton.disabled = false
    draw()
}


draw()