const blackKnight = {
    name: 'Black Knight',
    health: 100,
    hits: 0,
    items: {}
}

const items = {
    potion: {
        name: 'Health Potion',
        modifier: 25,
        description: 'Heals opponent by 25hp'
    },
    shield: {
        name: 'Shield',
        modifier: -.5,
        description: 'Decreases dmg output by 50%'
    },
    curse: {
        name: 'Curse',
        modifier: .5,
        description: 'Increases dmg output by 50%'
    }
}

let enemy = document.getElementById('name')

const enemyName = document.getElementById('name')
const health = document.getElementById('health')
const hits = document.getElementById('hits')
const activeItem = document.getElementById('active-item')
const slapButton = document.getElementById('slap')
const punchButton = document.getElementById('punch')
const kickButton = document.getElementById('kick')
const item1Button = document.getElementById('item1')
const item2Button = document.getElementById('item2')
const item3Button = document.getElementById('item3')

function draw() {
    endGame()
    enemy.innerText = blackKnight.name
    health.innerText = blackKnight.health.toString()
    hits.innerText = blackKnight.hits.toString()
    activeItem.innerText = blackKnight.items.description || 'No Item'
}

function addItem(name) {
    switch (name) {
        case 'potion':
            increaseHealth(items.potion.modifier)
            break
        default:
            blackKnight.items = items[name]
    } draw()
}

function increaseHealth(hp) {
    if (blackKnight.health + hp > 100) {
        blackKnight.health = 100
    } else {
        blackKnight.health += hp
    }
}

function decreaseHealth(hp) {
    if (blackKnight.items.description) {
        hp += hp * blackKnight.items.modifier
        if (hp < 0) {
            hp = 0
        }
    }
    if (blackKnight.health - hp <= 0) {
        blackKnight.health = 0
    } else {
        blackKnight.health -= hp
    }
}

function endGame() {
    if (blackKnight.health == 0) {
        slapButton.disabled = true
        kickButton.disabled = true
        punchButton.disabled = true
        item1Button.disabled = true
        item2Button.disabled = true
        item3Button.disabled = true
    }
}

function slap() {
    decreaseHealth(1);
    blackKnight.hits++;
    draw()
}

function punch() {
    decreaseHealth(5)
    blackKnight.hits++;
    draw()
}

function kick() {
    decreaseHealth(10)
    blackKnight.hits++;
    draw()
}

function reset() {
    blackKnight.health = 100
    blackKnight.hits = 0
    slapButton.disabled = false
    punchButton.disabled = false
    kickButton.disabled = false
    item1Button.disabled = false
    item2Button.disabled = false
    item3Button.disabled = false
    blackKnight.items = []
    draw()
}


draw()