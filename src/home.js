import { Element } from "./helpers/helpers";

const hours = [
    ["Monday", "closed"],
    ["Tuesday", "15:00 - 21:00"],
    ["Wednesday", "15:00 - 21:00"],
    ["Thursday", "15:00 - 21:00"],
    ["Friday", "15:00 - 21:00"],
    ["Saturday", "15:00 - 21:00"],
    ["Sunday", "15:00 - 21:00"],
];

const welcomeMessage = 'Welcome to Stevie\'s Cantina, your local place for authentic Mexican cusine. We focus on simple dishes prepared using the traditional ways passed down through the family. Come join us and try one of our flavourful dishes.';

function DisplayHours() {
    let hoursContainer = Element('div', ['hoursContainer', 'boxBorder']);
    let hoursList = Element('ul', ['hoursList']);
    hoursContainer.appendChild(hoursList);

    hours.forEach(day => {
        hoursList.appendChild(Element('li', ['dailyHours'], day[0], `${day[0]}: ${day[1]}`))
    });

    return hoursContainer;
}

function DisplayWelcome() {
    let welcomeContainer = Element('div', ['welcomeContainer', 'boxBorder'], '', welcomeMessage);

    return welcomeContainer;
}

export function DisplayHome() {
    let homeContainer = Element('div', ['homeContainer']);
    homeContainer.appendChild(DisplayWelcome());
    homeContainer.appendChild(DisplayHours());

    return homeContainer;
}