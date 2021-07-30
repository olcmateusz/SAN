function trainingView(){
  document.getElementById("town").style.display = "none";
  document.getElementById("training").style.display = "flex";
  document.getElementById("pGold").innerHTML = '<p id="pGold" style="padding-bottom: 170px">Posiadane złoto: ' + player.gold + '</p>'
  let x = document.getElementById('statistics');
  // x.innerHTML = '<div style = "float: left"><p>Strength: ' + player.strength + '</div><div style = "float:right"><img src="img/plus.png" style="height:30px;width:30px;float: right"</img>' + strCost + '</p><div style = "float: left"><p>Agility: ' + player.agility + '</p><div style = "float: left"><p>Intelligence: ' + player.intelligence + '</p>';

  x.innerHTML = '<div style="display:flex;justify-content:space-between"><div style="float:left;padding-bottom:15px;"><p>Strength: ' + player.strength + '</p></div>' + '<div style="display:flex;float:right"> ' + '<a href="#" onclick="addStr()"><img src="img/plus.png" style="height:30px;width:30px;padding-right:5px;"</img></a>' + strCost + '</div></div><div style="display:flex;justify-content:space-between"><div style="float:left;padding-bottom:15px;"><p>Agility: ' + player.agility + '</p></div>' + '<div style="display:flex;float:right"> ' + '<a href="#" onclick="addAgi()"><img src="img/plus.png" style="height:30px;width:30px;padding-right:5px;"</img></a>' + agiCost + '</div></div><div style="display:flex;justify-content:space-between"><div style="float:left;padding-bottom:15px;"><p>Intelligence: ' + player.intelligence + '</p></div>' + '<div style="display:flex;float:right"> ' + '<a href="#" onclick="addInt()"><img src="img/plus.png" style="height:30px;width:30px;padding-right:5px;"</img></a>' + intCost + '</div></div>';
  // document.getElementById('training').innerHTML += '<button class="summarybtn" onclick="townReturn()" style="width:50%; cursor:pointer;padding-left:5px;padding-right: 5px;position: relative">Back to town</button>'

}

function addStr(){
  if(player.gold >= strCost){
    if (strCost<10) {
      player.strength += 1;
      player.gold -= strCost;
      strCost += 1;
    }else {
      player.strength += 1;
      player.gold -= strCost;
      strCost = Math.floor(strCost*1.1);
    }
    player.health +=10;
    trainingView();
  }else {
    alert("Not enough gold");
  }
}

function addAgi(){
  if(player.gold >= agiCost){
    if (agiCost<10) {
      player.agility += 1;
      player.gold -= agiCost;
      agiCost += 1;
    }else {
      player.agility += 1;
      player.gold -= agiCost;
      agiCost = Math.floor(agiCost*1.1);
    }
    trainingView();
  }else {
    alert("Not enough gold");
  }
}

function addInt(){
  if(player.gold >= intCost){
    if (strCost<10) {
      player.intelligence += 1;
      player.gold -= intCost;
      intCost += 1;
    }else {
      player.intelligence += 1;
      player.gold -= intCost;
      intCost = Math.floor(intCost*1.1);
    }
    player.mana +=10;
    trainingView();
  }else {
    alert("Not enough gold");
  }
}
