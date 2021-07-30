let enemy;

let enemy00 = ["Target Dummy", 10, 5, 5, 100, 100, 5];
let enemy01 = ["Goblin", 10, 15, 5, 100, 150, 15];
let enemy02 = ["Spider", 5, 20, 2, 130, 160, 17];
let enemy03 = ["Bandit", 20,10,10,150,120,25];
let enemy04 = ["Troll", 30, 5, 0 ,300, 40, 20];
let enemy05 = ["Orc", 25, 10, 2, 200, 100, 18];
//let enemyx = ["Feminist",0,0,0,1000,50,0];
let enemyxy = ["Nerd", 200,150,150,1500,0,500];
let enemyList = [enemy00,enemy01,enemy02,enemy03,enemy04,enemy05,enemyx,enemyxy];
// enemyType, strength, agility, intelligence, health, speed, gold
// function Enemy(enemyType, health, mana, strength, agility, speed){
//   this.classType = enemyType;
//   this.health = health;
//   this.mana = mana;
//   this.strength = strength;
//   this.agility = agility;
//   this.speed = speed;
// }
function Enemy(enemyType, strength, agility, intelligence, health, speed, gold){
  this.classType = enemyType;
  this.health = health;
  this.mana = intelligence * 10;
  this.strength = strength;
  this.agility = agility;
  this.intelligence = intelligence;
  this.speed = agility;
  this.gold = gold;
}






function enemyHealthUpdate(){
  let getEnemyHealth = document.getElementById("enemyHealth");
  getEnemyHealth.innerHTML = '<p>Health: ' + enemy.health + '</p>';
  if (enemy.health <= 0) {
    getEnemyHealth.innerHTML = '<p>Health: ' + "0" + '</p>';
  }
}

function enemyAttack(){
  if (enemy.strength > enemy.agility && enemy.strength > enemy.intelligence) {
    console.log("big str");
    let basicDamage = Math.floor(enemy.strength * 0.6);
    let damage = basicDamage + Math.floor(Math.random() * Math.floor(enemy.strength/3));
    playerMirror.health -= damage;
    let getArena = document.getElementById("arena");
    let myText = "deals ";
    getArena.innerHTML +='<p>'+ enemy.classType + " " + myText + " " + damage + " damage." + '</p>';
    playerUpdateStats();
    updateScroll();
    if (playerMirror.health <= 0) {
      setTimeout(function(){let x = document.getElementById('summary');
      x.style.display = "flex";
      addActions(playerMirror.classType)
      let y = document.getElementById('result');
      y.innerHTML = 'YOU LOST!<br><br><br><br>REFRESH BROWSER TO PLAY AGAIN';
      let a = document.getElementById('nextEnemy');
      let b = document.getElementById('goTown');
      document.getElementById('loot').innerHTML = '';
      a.style.display = 'none';
      b.style.display = 'none';
      },1200);
    }
  }else if (enemy.agility > enemy.strength && enemy.agility > enemy.intelligence) {
    console.log("big agi");
    let basicDamage = Math.floor(enemy.agility * 0.6);
    let damage = basicDamage + Math.floor(Math.random() * Math.floor(enemy.agility/3));
    playerMirror.health -= damage;
    let getArena = document.getElementById("arena");
    let myText = "deals ";
    getArena.innerHTML +='<p>'+ enemy.classType + " " + myText + " " + damage + " damage" + '</p>';
    playerUpdateStats();
    updateScroll();
    if (playerMirror.health <= 0) {
      setTimeout(function(){let x = document.getElementById('summary');
      x.style.display = "flex";
      addActions(playerMirror.classType)
      let y = document.getElementById('result');
      y.innerHTML = 'YOU LOST!<br><br><br><br>REFRESH BROWSER TO PLAY AGAIN';
      let a = document.getElementById('nextEnemy');
      let b = document.getElementById('goTown');
      document.getElementById('loot').innerHTML = '';
      a.style.display = 'none';
      b.style.display = 'none';
      },1200);
    }
  }else if (enemy.intelligence > enemy.strength && enemy.intelligence > enemy.agility) {
    console.log("big int");
  }else {
    let getArena = document.getElementById("arena");
    getArena.innerHTML +='<p>' + enemy.classType + ' screams and does nothing.</p>';
  }
}
