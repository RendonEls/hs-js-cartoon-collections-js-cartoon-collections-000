var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]

function dwarfRollCall(dwarves) {
  var dwarflist = []
  for(var i=0 ; i<dwarves.length ; i++){
  dwarflist.push (`${i+1}. ${dwarves[i]} `)
  }
  return dwarflist.join("")
}

function summonCaptainPlanet(planeteerCalls){
  var shout = []
  for (var i=0; i<planeteerCalls.length; i++){
  shout.push(planeteerCalls[i].toUpperCase() + "!") 
  }
}
return shout

function longPlaneteerCalls(words) {
  for (var i=0; i<words.length; i++){
    if (words[i].length > 4){
      return true
    }
    else{
      return false
    }
  }
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"]
  for(var i=0; i<foods.length; i++){
    for (var c=0; c<cheese.length; c++){
      if (foods[i] === cheese[c]){
        return cheese[c]
      }
    }
  }
  return "no cheese!"
}