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
  for (var i=0; i<planeteerCalls.length; i++)
  shout.push(planeteerCalls[i].toUpperCase() + "!") 
}
return shout

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}