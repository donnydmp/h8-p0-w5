function attack (damage) {
  // Code disini
   
  var hasil = damage - 2
  
  return hasil  
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  hasil2 = attack(damagePerAttack)*numberOfAttacks
  return hasil2
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90