function changeVocals(str) {
  var vocal = [ ['a', 'b'], ['e', 'f'], ['i', 'j'], ['o', 'p'], ['u', 'v'],
    ['A', 'B'], ['E', 'F'], ['I', 'J'], ['O', 'P'], ['U', 'V'] ];
  var huruf = '';
  var check = false;
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vocal.length; j++) {
      if (str[i] === vocal[j][0]) {
        huruf += vocal[j][1];
        check = true;
      }
    }
    if (!check) {
      huruf += str[i];
    }
    check = false;
  }
  return huruf;
}
  
  function reverseWord (str) {
    var temp = ''
    for (let i = str.length-1 ; i>=0; i--){
      temp += str[i]
    }
    return temp
    //code di sini
  
  }
  
  
  function setLowerUpperCase (str) {
    var res = ''
    for (let j = 0; j < str.length; j++) {
      hurufKecil = str[j].toLowerCase()
      hurufBesar = str[j].toUpperCase()

      if ( str[j] === hurufKecil){
        res += hurufBesar
      }
      else if ( str[j] === hurufBesar){
        res += hurufKecil
      }
      
    }
    return res

    //code di sini
  }
  
  function removeSpaces (str) {
    var hapus =''
    for (let k = 0; k < str.length; k++) {
      if (str[k] === ' '){
        hapus += '' 
      }
      else{
        hapus +=str[k]
      }
    }
    return hapus
    //code di sini
  }
  
  function passwordGenerator (name) {
    if (name.length <= 5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var tukarVokal =  changeVocals(name)
    var reverse = reverseWord(tukarVokal)
    var ubahHuruf = setLowerUpperCase(reverse)
    var hapusSpasi = removeSpaces(ubahHuruf)
    return hapusSpasi

    //code di sini
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'