const numberOfPrisioners = 100
const prisioners = Array(numberOfPrisioners)
const boxes = shuffle(initBoxes())
let count = {};

function initBoxes() {
    return Array.from({ length: numberOfPrisioners }, (_, i) => i + 1)
}

function findMyNumber(prisionerId, searchBoxNumber = 1, checkedBoxes = 1) {
    if (checkedBoxes >= boxes.length + 1) return null

    const openedBox = boxes[searchBoxNumber - 1]

    if (openedBox === prisionerId) {
        //console.log("openedBox: ", openedBox, " / checkedBoxes: ", checkedBoxes)

        if (checkedBoxes <= (numberOfPrisioners / 2)) {
            return prisioners[prisionerId - 1] = true
        } else {
            return prisioners[prisionerId - 1] = false
        }
    }
    findMyNumber(prisionerId, openedBox, checkedBoxes + 1)
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


for (let [index, prisioner] of prisioners.entries()) {
    findMyNumber(index + 1, index + 1)
}

prisioners.forEach(function (i) { count[i] = (count[i] || 0) + 1; })

if (count.true === numberOfPrisioners) {
    console.log("************************")
    console.log("////////////////////////")
    console.log("ALL PRISIONERS ARE FREE")
    console.log("////////////////////////")
    console.log("************************")
} else {
    console.log("----------------------")
    console.log("----------------------")
    console.log("DIE BITCH!")
    console.log("----------------------")
    console.log("----------------------")
}

console.log("<><><><><><><><><><><><>");
console.log("EXTRA DATA:")
console.log(count);