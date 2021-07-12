let clickTributes = {
  sackOfGold: {
    id: 'sack',
    cost: 50,
    costId: 'sackCost',
    quantity: 0,
    multiplier: 1,
    multiId: 'sackId',
    img: 'assets/pouch-bag.png',
  },
};

let autoTributes = {
  gems: {
    id: 'gemBag',
    cost: 1000,
    costId: 'gemCost',
    quantity: 0,
    multiplier: 5,
    multiId: 'gemId',
    img: 'assets/diamond.png',
  },
  treasureChest: {
    id: 'treasure',
    cost: 3000,
    costId: 'chestCost',
    quantity: 0,
    multiplier: 15,
    multiId: 'chestId',
    img: 'assets/treasure.png',
  },
  goat: {
    id: 'billyGoat',
    cost: 5000,
    costId: 'goatCost',
    quantity: 0,
    multiplier: 25,
    multiId: 'goatId',
    img: 'assets/goat.png',
  },
};

let coins = 0;
let interval;

function clicks() {
  coins++
  console.log(coins)
  for (key in clickTributes) {
    let upgrades = clickTributes[key]
    let total = upgrades.quantity * upgrades.multiplier
    coins += total
  }
  drawClick()
  drawAuto()

}

function buySack(key) {
  let upgrades = clickTributes[key]
  if (coins >= upgrades.cost) {
    coins -= upgrades.cost
    upgrades.quantity++
    upgrades.cost *= 2
    upgrades.multiplier *= 2
    console.log(upgrades)
    drawClick()
    drawAuto()
  }
  else window.alert('"Thats all the gold you have? Pathetic."')
}

function buyAuto(key) {
  let upgrades = autoTributes[key]
  if (coins >= upgrades.cost) {
    coins -= upgrades.cost
    upgrades.quantity++
    upgrades.cost *= 2
    upgrades.multiplier *= 2
    console.log(upgrades)
    drawClick()
    drawAuto()
  }
  else window.alert('"Your tribute is insufficient. Bring more gold coins."')

}

function drawClick() {
  document.getElementById('coins').innerText = coins
  for (key in clickTributes) {
    let upgrades = clickTributes[key]
    document.getElementById(upgrades.id).innerText = upgrades.quantity
    document.getElementById(upgrades.costId).innerText = upgrades.cost
    document.getElementById(upgrades.multiId).innerText = upgrades.multiplier
  }

}

function drawAuto() {
  for (key in autoTributes) {
    let upgrades = autoTributes[key]
    document.getElementById(upgrades.id).innerText = upgrades.quantity
    document.getElementById(upgrades.costId).innerText = upgrades.cost
    document.getElementById(upgrades.multiId).innerText = upgrades.multiplier
  }

}

function startInterval() {
  interval = setInterval(collectAutoTributes, 3000);
  console.log('interval')
}

function collectAutoTributes() {
  console.log('autotribute check')
  for (key in autoTributes) {
    let upgrades = autoTributes[key]
    if (upgrades.quantity > 0) {
      coins += upgrades.quantity * upgrades.multiplier
      drawClick()
      drawAuto()
    }
  }
}

drawAuto()
drawClick()
startInterval()