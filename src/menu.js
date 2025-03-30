import * as images from './images/images.js';
import { Element } from './helpers/helpers.js';

export const Menu = [];
class MenuItem {
    constructor(name, description, course, price, image) {
        this.name = name;
        this.description = description;
        this.course = course;
        this.price = price;
        this.image = image;
    }

    getMenuItem() {
        return {
            name: this.name,
            description: this.description,
            course: this.course,
            price: this.price,
            image: this.image,
        };
    }
}


Menu.push(new MenuItem('Chicken Soup', 'Hearty chicken soup rich with noodles', 'Starter', 3.99, images.SoupImage));
Menu.push(new MenuItem('Nachos', 'Big plate of nachos with cheese, great for sharing', 'Starter', 9.99, images.NachosImage));
Menu.push(new MenuItem('Beef Enchiladas', 'Big filled tortilla wrapped up and filled with tasty beef and topped with tomato sauce', 'Main', 14.99, images.EnchiladasImage));
Menu.push(new MenuItem('Veggie Quesadillas', 'Crispy baked tortilla wrap filled with veggies and lots of cheese', 'Main', 12.99, images.QuesadillaImage));
Menu.push(new MenuItem('Churros', 'A plate of tasty mexican donuts coated in cinnamon sugar', 'Dessert', 6.99, images.ChurrosImage));

export function DisplayMenu() {
    let menuContainer = Element('div', ['menuContainer']);

    menuContainer.appendChild(CreateHeader('Starters'));
    menuContainer.appendChild(DisplayCourseItems('Starter'));

    menuContainer.appendChild(CreateHeader('Mains'));
    menuContainer.appendChild(DisplayCourseItems('Main'));

    menuContainer.appendChild(CreateHeader('Desserts'));
    menuContainer.appendChild(DisplayCourseItems('Dessert'));

    return menuContainer;
}

function CreateHeader(title) {
    let headerElement = Element('h1', ['courseHeader'], title, title)

    return headerElement;
}


function DisplayCourseItems(course) {
    let filteredMenu = Menu.filter(menuItem => menuItem.course == course);

    let menuCourseContainer = Element('div', ['courseContainer']);
   
    filteredMenu.forEach((menuItem => {
        menuCourseContainer.appendChild(DisplayMenuItem(menuItem));
    }))

    return menuCourseContainer;
}

function DisplayMenuItem(menuItem) {
    let menuItemContainer = Element('div', ['menuItemContainer']);

    let menuItemImage = Element('img', ['menuItemImage'], menuItem.name);
    menuItemImage.src = menuItem.image;
    menuItemContainer.appendChild(menuItemImage);

    menuItemContainer.appendChild(Element('div', ['menuItemName'], '', menuItem.name));
    menuItemContainer.appendChild(Element('div', ['menuItemDescription'], '', menuItem.description));
    menuItemContainer.appendChild(Element('div', ['menuItemPrice'], '', menuItem.price));

    return menuItemContainer;
}
