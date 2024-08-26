
//___________________________________________________________
//For Draw Star Symbols
// for (let i = 1; i <= 10; i++) {
//   let starSymbols = "";
//   for (let j = 1; j <= i; j++) {
//     starSymbols += "*";
//   }
//   console.log(starSymbols);
// }


//___________________________________________________________
//For Find Simple Numbers
// var simpleNumbers = [];
// for (var i = 1; i < 10; i++) {
//   var count = 0;
//   for (j = 1; j < 10; j++) {
//     if (i % j == 0) {
//       count++;
//     }
//   }
//   if (count == 2) {
//     simpleNumbers.push(i);
//   }
// }
// console.log(simpleNumbers);
//___________________________________________________________




//FIRST VARIANT
for (i = 0; i <= 10; i++) {
  var letterC = "";
  for (j = 0; j <= 20; j++) {
    if (i == 0 || i == 10 || j==0) {
      letterC += "*";
    }
    else {
      letterC += " ";
    }
  }
  console.log(letterC);
}




//SECOND VARIANT
var letterC = "";
for (i = 0; i <= 10; i++) {
    for (j = 0; j <= 20; j++) {
      if (i == 0 || i == 10 || j==0) {
        letterC += "*";
      }
      else {
        letterC += " ";
      }
    }
    letterC+="\n";
  }
  console.log(letterC);




// //THIRD VARIANT
var drawingAll=[];
for (i = 0; i <= 10; i++) {
    var letterC = "";
    for (j = 0; j <= 20; j++) {
      if (i == 0 || i == 10 || j==0) {
        letterC += "*";
      }
      else {
        letterC += " ";
      }
    }
    drawingAll.push(letterC);
  }
  console.log(drawingAll);

