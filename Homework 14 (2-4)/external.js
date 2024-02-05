let header = document.getElementById("myTitle");
console.log(header.innerText);
header.innerText = "Nou! Not cool page";

let firstParagraph = document.getElementsByClassName("paragraph");
console.log(firstParagraph[0].innerText);
firstParagraph[0].innerText = "This is not an exercise. It's pretty difficult";

let secondParagraph = document.getElementsByClassName("paragraph second");
console.log(secondParagraph[0].innerText);
secondParagraph[0].innerText = "No, it's not. It's difficult!";

let text = document.getElementsByTagName("text");
console.log(text[0].innerText);
text[0].innerText = "I've changed a lot"