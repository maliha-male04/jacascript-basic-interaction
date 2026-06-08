console.log("Javascript file is connected!");

let studentName = "Sena Kendali";
let welcomeMessage = "Welcome to Javascript Practice!";

console.log(studentName);
console.log(welcomeMessage);

// # : Namanya crash. Digunakan krn kita memilih element berdasarkan ID
// Stlh tanda crash, itu nama id yang kita digunakan di html

let profileAvatar = document.querySelector("#profileAvatar");
let profileName = document.querySelector("#profileName");
let profileRole = document.querySelector("#profileRole");
let profileDescription =document.querySelector("#profileDescription");
let messageBox = document.querySelector("#messageBox");
let sayHelloButton = document.querySelector("#sayHellobutton");
let updateProfileButton = document.querySelector("#updateProfileButton");
let resetButton = document.querySelector("#resetButton");

console.log(profileName);
console.log(messageBox);
console.log(sayHelloButton);

// addEventListener : Merubah konten tanpa mereload browsernya
// textContent : Merubah teks, pada isian teks id

sayHelloButton.addEventListener("click", function(){
    console.log("Say hello button is clicked!");
    messageBox.textContent = "Hello, Pioneers! Welcome to Javascript Practice.";
});

// Ini untuk mengupdate konten atau merubah
updateProfileButton.addEventListener("click", function(){
    profileAvatar.textContent = "FE";
    profileName.textContent = "Hi, I am Maliha a Front End Developer!";
    profileRole.textContent = "Learning Javascript Interaction";
    profileDescription.textContent = "Now I am can page content without refreshing the page.";
    messageBox.textContent = "Profile updated successfully without refreshing the page.";
});

// Ini untuk mereset konten, agar berubah seperti pada awalnya
resetButton.addEventListener("Click", function(){
    profileAvatar.textContent = "JS";
    profileName.textContent = "Hello, Pioneer";
    profileRole.textContent = "Frontend Developer in Progress";
    profileDescription.textContent = "I am learning how Javascript makes web pages interactive.";
    messageBox.textContent = "Click a button to start te interaction.";
});