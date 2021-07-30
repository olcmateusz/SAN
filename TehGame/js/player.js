let player;
let strCost = 5;
let agiCost = 5;
let intCost = 5;
let buffDuration;
let currentTurn = 1;
let buffed;
let spellAmp = 0;
let freeSpell = false;

// Pierwszy koncept
// function Player(name, classType, health, mana, strength, agility, speed){
//   this.name = name;
//   this.classType = classType;
//   this.health = health;
//   this.mana = mana;
//   this.strength = strength;
//   this.agility = agility;
//   this.speed = speed;
// }


// MOJA WERSJA
function Player(name, classType, strength, agility, intelligence, rage, energy){
    switch (classType) {
      case 'Warrior':
        baseHealth = 250;
        break;
      case 'Rogue':
        baseHealth = 150;
        break;
      case 'Mage':
        baseHealth = 125;
        break;
      case 'Hunter':
        baseHealth = 200;
        break;
    }
    this.name = name;
    this.classType = classType;
    this.strength = strength;
    this.agility = agility;
    this.intelligence = intelligence;
    health = strength * 10 + baseHealth;
    this.health = health;
    this.mana = intelligence * 10;
    this.speed = agility;
    this.rage = rage;
    this.energy = energy;
    this.gold = 0;
}


// NAME, CLASSTYPE, STRENGHT, AGILITY, INTELLIGENCE, HEALTH, MANA, SPEED, RAGE, ENERGY,

function addActions(classType){
  switch (classType) {
    case 'Warrior':
      let warriorSkills = document.getElementById("actions");
      warriorSkills.innerHTML = '<div class="tooltip"><span class="tooltiptext">Podstawowy atak. Zadaje słabe obrażenia i generuje Rage.</span><a href="#" class="" onclick="playerMoves.warriorAttack()"><img alt="skill1" src="img/skills/warriorAttack.jpg"</img></a></div><div class="tooltip"><span class="tooltiptext">Cios o umiarkowanej sile. Wymaga 25 Rage aby użyć</span><a href="#" class="" onclick="playerMoves.mortalStrike()"><img alt="skill2" src="img/skills/mortalStrike.jpg"</img></a></div><div class="tooltip"><span class="tooltiptextr">Mocarny cios. Zadaje obrażenia oparte o procent zdrowia przeciwnika. Wymaga 60 rage*</span><a href="#" class="" onclick="playerMoves.overpower()"><img alt="skill3" src="img/skills/overpower.jpg"</img></a></div><div class="tooltip"><span class="tooltiptextr">Wzmacnia siłe gracza o 50% na 3 tury.</span><a href="#" class="" onclick="playerMoves.battleShout()"><img alt="skill4" src="img/skills/battleShout.jpg"</img></a></div>'
      break;
    case 'Rogue':
      let rogueSKills = document.getElementById("actions");
      rogueSKills.innerHTML = '<img alt="skill1"</img><img alt="skill2"</img><img alt="skill3"</img><img alt="skill4"</img>'
      break;
    case 'Mage':
      let mageSkills = document.getElementById("actions");
      mageSkills.innerHTML = '<div class="tooltip"><span class="tooltiptext">Deals moderate damage and increases damage and mana cost of your next Pyroblast or Arcane Missiles by 20%. This effect stacks. Have a chance to make your next Arcane Missiles free! Basic mana Cost: 30</span><a href="#" class="" onclick="playerMoves.arcaneBlast()"><img alt="skill1" src="img/skills/arcaneBlast.jpg"</img></a></div><div class="tooltip"><span class="tooltiptext">Pyroblast. Advanced fire spell. Trust me you dont want to end up beeing hit by one of those. Basic mana cost: 80</span><a href="#" class="" onclick="playerMoves.pyroblast()"><img alt="skill2" src="img/skills/pyroblast.jpg"</img></a></div><div class="tooltip"><span class="tooltiptextr">Arcane Missiles. A barrage of arcane missiles. Basic mana cost: 90</span><a href="#" class="" onclick="playerMoves.arcaneMissiles()"><img alt="skill3" src="img/skills/arcaneMissiles.jpg"</img></a></div><div class="tooltip"><span class="tooltiptextr">Evocation. You gain 60% of your mana back! Cannot exceeed your maximum mana.</span><a href="#" class="" onclick="playerMoves.evocation()"><img alt="skill4" src="img/skills/evocation.jpg"</img></a></div>'
      break;
    case 'Hunter':
      let hunterSkills = document.getElementById("actions");
      hunterSkills.innerHTML = '<img alt="skill1"</img><img alt="skill2"</img><img alt="skill3"</img><img alt="skill4"</img>'
      break;
  }
}

function playerUpdateStats(){
  let getPlayer = document.querySelector(".player");
  switch (player.classType) {
    case 'Warrior':
      getPlayer.innerHTML = '<img src="img/' + playerMirror.classType.toLowerCase() + '1.jpg"><div class="innerClass"><h2>' + playerMirror.name + ' - ' + playerMirror.classType + '</h2><p>Health: ' + playerMirror.health + '</p><p>Rage: ' + playerMirror.rage + '</p><p>Strength: ' + playerMirror.strength + '</p><p>Agility: ' + playerMirror.agility + '</p><p>Intelligence: ' + playerMirror.intelligence + '</p>';
      break;
    case 'Rogue':
      getPlayer.innerHTML = '<img src="img/' + playerMirror.classType.toLowerCase() + '1.jpg"><div class="innerClass"><h2>' + playerMirror.name + ' - ' + playerMirror.classType + '</h2><p>Health: ' + playerMirror.health + '</p><p>Energy: ' + playerMirror.energy + '</p><p>Strength: ' + playerMirror.strength + '</p><p>Agility: ' + playerMirror.agility + '</p><p>Intelligence: ' + playerMirror.intelligence + '</p>';
      break;
    case 'Mage':
      getPlayer.innerHTML = '<img src="img/' + playerMirror.classType.toLowerCase() + '1.jpg"><div class="innerClass"><h2>' + playerMirror.name + ' - ' + playerMirror.classType + '</h2><p>Health: ' + playerMirror.health + '</p><p>Mana: ' + playerMirror.mana + '</p><p>Strength: ' + playerMirror.strength + '</p><p>Agility: ' + playerMirror.agility + '</p><p>Intelligence: ' + playerMirror.intelligence + '</p>';
      break;
    case 'Hunter':
      getPlayer.innerHTML = '<img src="img/' + playerMirror.classType.toLowerCase() + '1.jpg"><div class="innerClass"><h2>' + playerMirror.name + ' - ' + playerMirror.classType + '</h2><p>Health: ' + playerMirror.health + '</p><p>Energy: ' + playerMirror.energy + '</p><p>Strength: ' + playerMirror.strength + '</p><p>Agility: ' + playerMirror.agility + '</p><p>Intelligence: ' + playerMirror.intelligence + '</p>';
      break;

  }
}

function checkForBuff(){
  if (buffDuration > currentTurn) {
    playerMirror.strength = player.strength * 1.5;
  }else {
    playerMirror.strength = player.strength;
  }
}

let playerMoves = {
  warriorAttack: function(){
    checkForBuff();
    let basicDamage = Math.floor(playerMirror.strength*0.5);
    playerMirror.rage += 10;
    let damage = basicDamage + Math.floor(Math.random() * Math.floor(playerMirror.strength/4));
    enemy.health -= damage;
    combatLog(damage);
    if (enemy.health > 0) {
      fightUpdate(playerMirror.classType);
    }else{
      let getArena = document.getElementById("arena");
      enemyHealthUpdate();
      //Zablokuj możliwość spamowania akcji
      let getActions = document.getElementById("actions");
      getActions.innerHTML = '';
      // Dodaj graczowi złoto za potwora
      lootGold();
      document.getElementById('loot').innerHTML = '<p>Gold looted: ' + enemy.gold + '</p>';
      // setTimeout(function(){getArena.innerHTML += '<p>ZWYCIĘSTWO!</p>';updateScroll();},1500);
      updateScroll();
      updateRandom();
      setTimeout(function(){let x = document.getElementById('summary'); x.style.display = "flex"; addActions(playerMirror.classType)},1200);

    }

  },
  mortalStrike: function(){
    if (playerMirror.rage<30) {
      alert("You dont have enough resources for that attack");
      return;
    }
    checkForBuff();
    let basicDamage = Math.floor(playerMirror.strength*1.2);
    let damage = basicDamage + Math.floor(Math.random() * Math.floor(playerMirror.strength/4));
    playerMirror.rage -= 20;
    enemy.health -= damage;
    combatLog(damage);
    if (enemy.health > 0) {
      fightUpdate(playerMirror.classType);
    }else {
      let getArena = document.getElementById("arena");
      enemyHealthUpdate();
      //Zablokuj możliwość spamowania akcji
      let getActions = document.getElementById("actions");
      getActions.innerHTML = '';
      // Dodaj graczowi złoto za potwora
      lootGold();
      document.getElementById('loot').innerHTML = '<p>Gold looted: ' + enemy.gold + '</p>';
      // setTimeout(function(){getArena.innerHTML += '<p>ZWYCIĘSTWO!</p>';updateScroll();},1500);
      updateScroll();
      updateRandom();
      setTimeout(function(){let x = document.getElementById('summary'); x.style.display = "flex"; addActions(playerMirror.classType)},1200);
    }
  },
  overpower: function(){
    checkForBuff();
    let basicDamage = Math.floor(enemy.health * 0.1 + playerMirror.strength * 1);
    let damage = basicDamage + Math.floor(Math.random() * Math.floor(playerMirror.strength/4));
    enemy.health -= damage;
    combatLog(damage);
    if (enemy.health > 0) {
      fightUpdate(playerMirror.classType);
    }else{
      let getArena = document.getElementById("arena");
      enemyHealthUpdate();
      //Zablokuj możliwość spamowania akcji
      let getActions = document.getElementById("actions");
      getActions.innerHTML = '';
      // Dodaj graczowi złoto za potwora
      lootGold();
      document.getElementById('loot').innerHTML = '<p>Gold looted: ' + enemy.gold + '</p>';
      // setTimeout(function(){getArena.innerHTML += '<p>ZWYCIĘSTWO!</p>';updateScroll();},1500);
      updateScroll();
      updateRandom();
      setTimeout(function(){let x = document.getElementById('summary'); x.style.display = "flex"; addActions(playerMirror.classType)},1200);
    }
  },
  battleShout: function(){
    buffDuration = currentTurn + 4;
    let getArena = document.getElementById("arena");
    getArena.innerHTML += '<p>' + player.name + ' ' + 'gains Berserker Strength.</p>';
    checkForBuff();
    playerUpdateStats();
    fightUpdate(playerMirror.classType);
    updateScroll();
  },
  arcaneBlast: function(){
    if (playerMirror.mana >= 30) {
      let basicDamage = Math.floor(playerMirror.intelligence * 0.5);
      let damage = basicDamage + Math.floor(Math.random() * Math.floor(playerMirror.intelligence/4));
      enemy.health -= damage;
      playerMirror.mana -= 30;
      combatLog(damage);
      spellAmp += 20;
      let arcaneChance = Math.floor(Math.random() * 100);
      if (arcaneChance > 50) {
        freeSpell = true;
        let getArena = document.getElementById("arena");
        getArena.innerHTML += '<p>You gain Arcane Power.<br>Your next Arcane Missles are free!</p>';
        updateScroll();
      }
      if (enemy.health > 0) {
        fightUpdate(playerMirror.classType);
      }else {
        let getArena = document.getElementById("arena");
        enemyHealthUpdate();
        //Zablokuj możliwość akcji na czas ruchu przeciwnika
        let getActions = document.getElementById("actions");
        getActions.innerHTML = '';
        // Dodaj graczowi złoto za potwora
        lootGold();
        document.getElementById('loot').innerHTML = '<p>Gold looted: ' + enemy.gold + '</p>';
        // setTimeout(function(){getArena.innerHTML += '<p>ZWYCIĘSTWO!</p>';updateScroll();},1500);
        updateScroll();
        updateRandom();
        setTimeout(function(){let x = document.getElementById('summary'); x.style.display = "flex"; addActions(playerMirror.classType)},1200);
      }
    }else {
      alert("You dont have enough mana!");
    }

  },
  pyroblast: function(){
    let manaCost = 80 + (80 * spellAmp / 100);
    if (manaCost<=playerMirror.mana) {
      let basicDamage = Math.floor(playerMirror.intelligence * 1.4);
      let damage = basicDamage + Math.floor(Math.random() * Math.floor(playerMirror.intelligence/4));
      let damageFinall = Math.floor(damage + (damage * spellAmp / 100));
      enemy.health -= damageFinall;
      playerMirror.mana -= manaCost;
      combatLog(damageFinall);
      spellAmp = 0;
      if (enemy.health > 0) {
        fightUpdate(playerMirror.classType);
      }else {
        let getArena = document.getElementById("arena");
        enemyHealthUpdate();
        //Zablokuj możliwość spamowania akcji
        let getActions = document.getElementById("actions");
        getActions.innerHTML = '';
        // Dodaj graczowi złoto za potwora
        lootGold();
        document.getElementById('loot').innerHTML = '<p>Gold looted: ' + enemy.gold + '</p>';
        // setTimeout(function(){getArena.innerHTML += '<p>ZWYCIĘSTWO!</p>';updateScroll();},1500);
        updateScroll();
        updateRandom();
        setTimeout(function(){let x = document.getElementById('summary'); x.style.display = "flex"; addActions(playerMirror.classType)},1200);
      }
    }else {
      alert("You dont have enough mana!")
    }

  },
  arcaneMissiles: function(){
    let manaCost = 90 + (90 * spellAmp / 100);
    if (playerMirror.mana >= manaCost && freeSpell === false) {
      let basicDamage = playerMirror.intelligence * 0.3;
      let damage = basicDamage + Math.floor(Math.random() * Math.floor(playerMirror.intelligence/4));
      let damageFinall = Math.floor(damage + (damage * spellAmp / 100));
      playerMirror.mana -= manaCost;
      enemy.health -= damageFinall;
      setTimeout(function(){combatLog(damageFinall);enemyHealthUpdate();},300);

      setTimeout(function(){
      damage = basicDamage + Math.floor(Math.random() * Math.floor(playerMirror.intelligence/4));
      damageFinall = Math.floor(damage + (damage * spellAmp / 100));
      enemy.health -= damageFinall;
      enemyHealthUpdate();
      combatLog(damageFinall)},600);

      setTimeout(function(){damage = basicDamage + Math.floor(Math.random() * Math.floor(playerMirror.intelligence/4));
      damageFinall = Math.floor(damage + (damage * spellAmp / 100));
      enemy.health -= damageFinall;
      combatLog(damageFinall);
      enemyHealthUpdate();
      spellAmp = 0;
      if (enemy.health > 0) {
        setTimeout(function(){fightUpdate(playerMirror.classType)},300);
      }else {
        let getArena = document.getElementById("arena");
        enemyHealthUpdate();
        //Zablokuj możliwość spamowania akcji
        let getActions = document.getElementById("actions");
        getActions.innerHTML = '';
        // Dodaj graczowi złoto za potwora
        lootGold();
        document.getElementById('loot').innerHTML = '<p>Gold looted: ' + enemy.gold + '</p>';
        // setTimeout(function(){getArena.innerHTML += '<p>ZWYCIĘSTWO!</p>';updateScroll();},1500);
        updateScroll();
        updateRandom();
        setTimeout(function(){let x = document.getElementById('summary'); x.style.display = "flex"; addActions(playerMirror.classType)},1200);
      }
      },900);


    }else if (freeSpell) {
      let basicDamage = playerMirror.intelligence * 0.3;
      let damage = basicDamage + Math.floor(Math.random() * Math.floor(playerMirror.intelligence/4));
      let damageFinall = Math.floor(damage + (damage * spellAmp / 100));
      enemy.health -= damageFinall;
      setTimeout(function(){combatLog(damageFinall);enemyHealthUpdate();},300);

      setTimeout(function(){
      damage = basicDamage + Math.floor(Math.random() * Math.floor(playerMirror.intelligence/4));
      damageFinall = Math.floor(damage + (damage * spellAmp / 100));
      enemy.health -= damageFinall;
      combatLog(damageFinall);
      enemyHealthUpdate()},600);

      setTimeout(function(){damage = basicDamage + Math.floor(Math.random() * Math.floor(playerMirror.intelligence/4));
        damageFinall = Math.floor(damage + (damage * spellAmp / 100));
        enemy.health -= damageFinall;
        freeSpell = false;
        combatLog(damageFinall);
        enemyHealthUpdate();
        let getArena = document.getElementById("arena");
        getArena.innerHTML += '<p>Arcane Power fades from you!  </p>';
        updateScroll();
        spellAmp = 0;
        if (enemy.health > 0) {
          setTimeout(function(){fightUpdate(playerMirror.classType)},300);
        }else {
          let getArena = document.getElementById("arena");
          enemyHealthUpdate();
          //Zablokuj możliwość spamowania akcji
          let getActions = document.getElementById("actions");
          getActions.innerHTML = '';
          // Dodaj graczowi złoto za potwora
          lootGold();
          document.getElementById('loot').innerHTML = '<p>Gold looted: ' + enemy.gold + '</p>';
          // setTimeout(function(){getArena.innerHTML += '<p>ZWYCIĘSTWO!</p>';updateScroll();},1500);
          updateScroll();
          updateRandom();
          setTimeout(function(){let x = document.getElementById('summary'); x.style.display = "flex"; addActions(playerMirror.classType)},1200);
        }
        },900);

      // if (enemy.health > 0) {
      //   setTimeout(function(){fightUpdate(playerMirror.classType)},300);
      // }else {
      //   let getArena = document.getElementById("arena");
      //   enemyHealthUpdate();
      //   //Zablokuj możliwość spamowania akcji
      //   let getActions = document.getElementById("actions");
      //   getActions.innerHTML = '';
      //   // Dodaj graczowi złoto za potwora
      //   lootGold();
      //   document.getElementById('loot').innerHTML = '<p>Zdobyte złoto: ' + enemy.gold + '</p>';
      //   // setTimeout(function(){getArena.innerHTML += '<p>ZWYCIĘSTWO!</p>';updateScroll();},1500);
      //   updateScroll();
      //   updateRandom();
      //   setTimeout(function(){let x = document.getElementById('summary'); x.style.display = "flex"; addActions(playerMirror.classType)},1200);
      // }
    }else {
      alert("You dont have enough mana!")
    }

  },
  evocation: function(){
    let manaGained = 0.6 * player.mana;
    if (playerMirror.mana + manaGained > player.mana) {
      let manaDiff = playerMirror.mana + manaGained - player.mana;
      manaGained -= manaDiff;
      playerMirror.mana = player.mana;
      let getArena = document.getElementById("arena");
      getArena.innerHTML +='<p>' + player.name + ' restores ' + manaGained + ' mana.</p>';
    }else {
      playerMirror.mana += manaGained;
      let getArena = document.getElementById("arena");
      getArena.innerHTML +='<p>' + player.name + ' restores ' + manaGained + ' mana.</p>';
    }
    updateScroll();
    fightUpdate(playerMirror.classType);
  }
}
