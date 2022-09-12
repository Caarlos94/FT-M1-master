'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  num = num + "";
	const arr = [];
  const arrb = [];
  
  for(let i = 0; i < num.length; i++){
    arr.push(num[num.length-1-i]*Math.pow(2,i));
  }
  let result = arr.reduce((acc,el) => acc + el, 0)
  return result
}

function DecimalABinario(num) {
  // tu codigo aca
  let number2 = num;
  let arr = [];
  let binario = 0;
  while(num >= 1) {
    binario = Math.floor(num % 2);
    arr.push(binario)
    num = num / 2;
  }
  let numBin = arr.reverse().join("")
  return numBin
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}