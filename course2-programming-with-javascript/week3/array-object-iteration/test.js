let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);


const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);


function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6);

function handleClicks() {
    switch (h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[1]:
            h1.innerText = arr[3];
            break;       
        default:
        h1.innerText = arr[0];
        }
}