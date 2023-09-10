//for 문──────────────────────────────────────────────────
for (let i = 2; i <= 9; i++) {                            
  for (let j = 2; j <= 9; j++)
    document.write(`${i} x ${j} = ${i*j}<br>`);
  document.write("<br>")
}

//while 문────────────────────────────────────────────────
let i=2;
while (i<=9) {
  let j = 2
  while (j<=9){
    document.write(`${i} x ${j} = ${i*j}<br>`);
    j++;
  }
  document.write("<br>")
  i++;
}

//for of──────────────────────────────────────────────────
let arr = [2, 3, 4, 5, 6, 7, 8, 9];
for (const i of arr) {
  for (const j of arr) {
    document.write(`${i} x ${j} = ${i*j}<br>`);
  }
  document.write("<br>");
}

//for in──────────────────────────────────────────────────
let arr = [2, 3, 4, 5, 6, 7, 8, 9];
for (const i in arr) {
  let n = Number(i)+2;
  for (const j in arr) {
    let m = Number(j)+2;
    document.write(`${n} x ${m} = ${n*m}<br>`);
  }
  document.write("<br>");
}
