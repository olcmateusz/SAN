let nameCounter = 0;
let enemiesDefeated = 0;
let enemyMin = 0;
let playerMirror;
let difficulity = 1;
let GameManager = {
  // setGameStart: function(name, classType){
  //   this.createPlayer(name, classType);
    // this.setPrefight();
  // },
  createPlayer: function(name, classType){
    // console.log('moje imie to', name);
    // console.log('moja klasa to', classType);

    //Tworze obiekt gracza w zaleznosci od parametu odczytywanego z elementu <a> z htmla

    switch (classType) {
      case "Warrior":
        player = new Player(name, classType, 20, 10, 5, 0, 0);
                        // (name, classType, strength, agility, intelligence, rage, energy)
        addActions(classType);
        break;
      case "Rogue":
        player = new Player(name, classType, 10, 20, 5, 0, 100);
        addActions(classType);
        break;
      case "Mage":
        player = new Player(name, classType, 5, 10, 25, 0, 0);
        addActions(classType);
        break;
      case "Hunter":
        player = new Player(name, classType, 15, 15, 5, 0, 100);
        addActions(classType);
        break;

    }
    // Sprawdzam tylko puste pole zarezerwowane dla nicku, pewnie wartoby poszukać wyrażenia regularnego sprawdzającego obecnośc cyfr etc
    if (player.name === "") {

      switch (nameCounter) {
        case 0:
          alert("I DEMAND A FITTING NAME");
          nameCounter += 1;
          break;
        case 1:
          alert("I DARE YOU, I DOUBLE DARE YOU NOT TO TYPE IN NAME AGAIN");
          nameCounter += 1;
          break;
        case 2:
          nameCounter += 1;
          // Niespodzianka muzyczna
          // let audio = new Audio("Songname.mp3");
          // audio.play();
          alert("WATCH THIS");
          break;

      }
    }
    else{
      document.getElementById("cC").style.display = "none";
      document.getElementById("town").style.display = "flex";
    }

  },
  setPrefight: function(){


    //Tworzenie lustrzanej kopii gracza która będzie obrywać i resetować się przy powrocie do miasta
    playerMirror = Object.assign({}, player);

    playerUpdateStats();

    document.getElementById("town").style.display = "none";
    document.getElementById("dung").style.display = "flex";
    document.getElementById('arena').innerHTML = "";

    let getEnemy = document.querySelector(".enemy");
// enemyType, strength, agility, intelligence, health, speed
    //Aby uniknac sytuacji gdy po powrocie do miasta nadal jest mozliwy tylko przeciwnik z ostatniego miejsca na liscie.
    //Fix na szybko - do przemyslenia
    if (enemyMin > 0) {
      enemyMin -= 1
    }

    //Tymczasowe rozwiazanie zeby nie przekrecic listy
    if (enemiesDefeated >= enemyList.length) {
      enemiesDefeated = enemyList.length -1;
    }
    if (enemyMin >= enemyList.length) {
      enemyMin = enemyList.length -1;
    }
    let random = Math.floor(Math.random() * (enemiesDefeated - enemyMin + 1)) + enemyMin;


    //Utworzenie przeciwnika
    enemy = new Enemy(enemyList[random][0],enemyList[random][1],enemyList[random][2],enemyList[random][3],enemyList[random][4],enemyList[random][5],enemyList[random][6]);

    let propername = enemy.classType.replace(/\s/g, '').toLowerCase();

    // console.log(propername);
    getEnemy.innerHTML = '<img src="img/enemies/' + propername + '.jpg"><div class="innerClass"><h2>' + enemy.classType + '</h2><p id="enemyHealth">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Intelligence: ' + enemy.intelligence + '</p></div>';

    if (player.speed < enemy.speed) {
      fightUpdate(player.classType);
    }

  },
  setAnotherFight: function(){
    difficulity += 0.2;
    buffDuration = 0;
    spellAmp = 0;
    freeSpell = false;
    checkForBuff();
    playerMirror.health += Math.floor(player.health * 0.1);
    if (playerMirror.health > player.health) {
      playerMirror.health = player.health;
    }
    playerMirror.mana += Math.floor(player.mana * 0.1);
    if (playerMirror.mana > player.mana) {
      playerMirror.mana = player.mana;
    }
    playerMirror.rage -= 5;
    if (playerMirror.rage < 0) {
      playerMirror.rage = 0;
    }
    let x = document.getElementById('summary');
    x.style.display = "none";
    document.getElementById('arena').innerHTML = "";
    playerUpdateStats()
    let getEnemy = document.querySelector(".enemy");

    //Tymczasowe rozwiazanie zeby nie przekrecic listy
    if (enemiesDefeated >= enemyList.length) {
      enemiesDefeated = enemyList.length -1;
    }
    if (enemyMin >= enemyList.length) {
      enemyMin = enemyList.length -1;
    }

    //Losowanie przeciwnika
    let random = Math.floor(Math.random() * (+enemiesDefeated + 1 - +enemyMin)) + +enemyMin;
    //Utworzenie przeciwnika
    // enemyType, strength, agility, intelligence, health, speed, gold
    enemy = new Enemy(enemyList[random][0],Math.floor(enemyList[random][1] * difficulity),Math.floor(enemyList[random][2] * difficulity),Math.floor(enemyList[random][3] * difficulity),Math.floor(enemyList[random][4] * difficulity),Math.floor(enemyList[random][5] * difficulity),Math.floor(enemyList[random][6] * difficulity * 1.5));
    let propername = enemy.classType.replace(/\s/g, '').toLowerCase();
    getEnemy.innerHTML = '<img src="img/enemies/' + propername + '.jpg"><div class="innerClass"><h2>' + enemy.classType + '</h2><p id="enemyHealth">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Intelligence: ' + enemy.intelligence + '</p></div>';

    if (player.speed < enemy.speed) {
      fightUpdate(player.classType);
    }

  }
}

function updateScroll(){
  var element = document.getElementById("arena");
  element.scrollTop = element.scrollHeight;
}

function combatLog(damage){
  let getArena = document.getElementById("arena");
  let myText = "You have dealt ";
  getArena.innerHTML +='<p>' + myText + " " + damage + " damage." + '</p>';
  updateScroll();
}

function fightUpdate(classname){
  let x = classname;
  let getActions = document.getElementById("actions");
  playerUpdateStats();
  enemyHealthUpdate();
  getActions.innerHTML = '<p>ENEMY TURN</p>';
  setTimeout(enemyAttack,1500);
  setTimeout(function(){
    addActions(x);
    currentTurn +=1;checkForBuff();
    playerUpdateStats();
    if (buffDuration === currentTurn) {
      let getArena = document.getElementById("arena");
      getArena.innerHTML +='<p>Berserker Strength fades.</p>';
    }
    updateScroll();
  },2500);
}

function lootGold(){
  player.gold += enemy.gold;
}

function updateRandom(){
  enemiesDefeated += 1;
  if (enemiesDefeated%2 ===0) {
    enemyMin +=1;
  }
}
