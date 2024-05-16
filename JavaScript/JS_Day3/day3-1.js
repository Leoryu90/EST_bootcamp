//for문

let sum = 0;

for (i=0; i<101; i++) {
    if (i %2 === 0)
        sum += i;
}

console.log(sum);

//while문

let j= 0;
let sum2 = 0;

while (j < 101) {
    if (j % 2 === 0) {
        sum2 += j;
    }
    j++;
}

console.log(sum2);
