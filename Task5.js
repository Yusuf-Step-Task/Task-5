// Task 1
const title = document.querySelector("#title");

title.textContent = "Welcome to Liblary";
const colorBtn = document.querySelector("#colorBtn");
colorBtn.addEventListener("click", function() {
    title.style.color = "red";
});

// Task 2
const links = document.links;

console.log(`Link count: ${ links.length}`);
const myLink = document.querySelector("#myLink");
myLink.href = "https://www.wikipedia.org";
myLink.textContent = "Wikipedia";

// Task 3
const selectBtn = document.querySelector("#selectBtn");
selectBtn.addEventListener("click", function() {
    const selectedText = window.getSelection();
    console.log(`Secilmis metn: ${selectedText.toString()}`);
});
