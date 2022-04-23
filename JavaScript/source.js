const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    // Only change code below this line
<<<<<<< HEAD
    const [, , ...arr] = list; // Change this line
=======
    const [a, b, ...arr] = list; // Change this line
>>>>>>> 0fe03f208a80e65a814c5a69d37d3b1c204f313d

    // Only change code above this line
    return arr;
}
const arr = removeFirstTwo(source);
