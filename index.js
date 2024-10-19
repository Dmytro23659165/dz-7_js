let massiv = [1, 2, 3];
console.log(massiv[1] = 12);


let massiv = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
massiv[1] = `kivi`
console.log(massiv[1])


let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result);


let massiv = [1, 2, 3, 4, 5];
for (const massivarot of massiv) {
    console.log(massiv);
}


let massiv = [`masiv`, `rak`, `kakashka`, `persik`, `shvel`];
for (let slovo = 0; slovo <= massiv.length; slovo++) {
    if (massiv[slovo].length >= 5) {
        console.log(massiv[slovo])
    }
}


let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let mas = 0; mas <= massiv; mas++) {
    if (massiv[mas]) {
        console.log(massiv[mas])
    }
}

let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maxInMassiv = Math.max(...massiv); 
console.log(maxInMassiv)


let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let bear = 0; bear < massiv[bear]; bear++) {
    if (bear % 2 === 1) {
        console.log(massiv[bear]);
    }
}
