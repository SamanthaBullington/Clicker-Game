let clickTributes = {
  goldCoins: {
    cost: 1,
    quantity: 0,
    multiplier: 1,
  },
  sackOfGold: {
    cost: 10,
    quantity: 0,
    multiplier: 2,
  },
};

let autoTributes = {
  gems: {
    cost: 50,
    quantity: 0,
    multiplier: 2,
  },
  relics: {
    cost: 100,
    quantity: 0,
    multiplier: 3,
  },
  smTreasureChest: {
    cost: 150,
    quantity: 0,
    multiplier: 4,
  },
  lgTreasureChest: {
    cost: 200,
    quantity: 0,
    multiplier: 5,
  },
};

let coins = 0



function clicks() {
  coins++
  console.log(coins)
  for (key in clickTributes) {
    let upgrades = clickTributes[key]
    let total = upgrades.quantity * upgrades.multiplier
    coins += total
  }
  draw()

}

function buySack(key) {
  let upgrades = clickTributes[key]
  if (coins >= upgrades.cost) {
    coins -= upgrades.cost
    upgrades.quantity++
    upgrades.cost *= 2
    upgrades.multiplier *= 2
    console.log(upgrades)
    draw(upgrades)
  }
  else window.alert('Not enough money')
}

function buyAuto(key) {
  let upgrades = autoTributes[key]
  if (coins >= upgrades.cost) {
    upgrades.quantity++
    upgrades.cost *= 2
    upgrades.multiplier *= 2
    console.log(upgrades)
    draw(upgrades)
  }
  else window.alert('Nope')

}


function draw(key) {
  for (key in clickTributes) {
    let upgrades = clickTributes[key]
    document.getElementById('coins').innerText = coins
    document.getElementById('sack').innerText = upgrades.quantity
  }

}

function draw2(key) {
  for (key in autoTributes) {
    let upgrades = autoTributes[key]
    console.log('itz working')
    document.getElementById('gemBag').innerText = upgrades.quantity
  }

}

function startInterval() {
  collectionInterval = setInterval(collectAutoTributes, 3000);
}

function collectAutoTributes() {


}