var sidenav = document.querySelector(".side-navbar")
var navbarmenutoggle = document.querySelector("navbar-menu-toggle")

function shownavbar() {
    sidenav.style.left = "0"
}
function closenavbar() {
    sidenav.style.left = "-60%"
}

var enteredtext = ""
var input = document.getElementById("search")
var elements = productbox.querySelectorAll("p")

function check(event) {
    enteredtext = event.target.value.toUpperCase()

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].textContent.toUpperCase().indexOf(enteredtext) < 0) {
            elements[i].style.display = "none"
        }
        else {
            elements[i].style.display = "block"
        }
    }
}