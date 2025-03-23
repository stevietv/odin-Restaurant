import { about } from "./about";
import { home } from "./home";
import { menu } from "./menu";

console.log("testing webpack");


function AddNavigation() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            Navigate(button.id);
        })
    })
}

function Navigate(location) {
    Clear();
    const content = document.getElementById("content");
    switch (location) {
        case "home":
            content.innerHTML= home;
            break;
        case "menu":
            content.innerHTML = menu;
            break;
        case "about":
            content.innerHTML = about;
            break;
        default:
            break;
    }
}

function Clear() {
    const content = document.getElementById("content");
    content.innerHTML = "";
}

AddNavigation();