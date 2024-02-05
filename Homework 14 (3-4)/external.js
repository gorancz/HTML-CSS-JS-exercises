let array = [2, 4, 5];

let list = document.getElementById("array-list");
    for (let number of array) {
        let item = document.createElement("li");
        item.textContent = number;
        list.appendChild(item);
    }


let sum = document.getElementById("array-sum");
    let total = 0;
    for (let number of array) {
        total += number;
}
sum.textContent = (`The sum of the numbers is ${total}`);

let equation = "";
    for (let i = 0; i < array.length; i++) {
        equation += array[i];
        if (i < array.length - 1) {
            equation += " + ";
         }
}
equation += " = " + total;
sum.textContent += "\n" + (`The equation is ${equation}`);
