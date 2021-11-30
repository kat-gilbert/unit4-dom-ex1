
function main() {

    let growMe = document.getElementById("grow-me");
    growMe.classList.add("big");

    let shrinkMe = document.getElementById("shrink-me");
    shrinkMe.classList.remove("big");

    findLi = document.querySelectorAll("li");
    for (let i = 0; i < findLi.length; i++) {
    console.log(findLi[i].textContent);
    }

    let newLink = document.querySelector(".link");
    newLink.setAttribute("href", "https://www.example.com");
    newLink.textContent = "somewhere";

    hideMe = document.getElementById("hide-me");
    hideMe.style.display = "none";

    showMe = document.getElementById("show-me");
    showMe.style.display = "block";

    let nameInput = document.getElementById("name").value;
    let h1 = document.querySelector("h1");
    h1.innerHTML = `Welcome ${nameInput}`;


}



