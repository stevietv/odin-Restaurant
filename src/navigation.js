import { about } from "./about";
import { DisplayMenu } from "./menu";
import { DisplayHome } from "./home";

export function AddNavigation() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            Navigate(button.id);
        })
    })

    Navigate("home");
}

function Navigate(location) {
    Clear();
    const content = document.getElementById("content");
    switch (location) {
        case "home":
            content.appendChild(DisplayHome());
            break;
        case "menu":
            content.appendChild(DisplayMenu());
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