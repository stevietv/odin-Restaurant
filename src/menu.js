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

import SoupImage from './images/soup.jpeg';
import NachosImage from './images/nachos.jpeg';
import EnchiladasImage from './images/enchiladas.jpeg';
import QuesadillaImage from './images/quesadillas.jpeg';
import ChurrosImage from './images/churros.jpeg';

Menu.push(new MenuItem('Chicken Soup', 'Hearty chicken soup rich with noodles', 'Starter', 3.99, SoupImage));
Menu.push(new MenuItem('Nachos', 'Big plate of nachos with cheese, great for sharing', 'Starter', 9.99, NachosImage));
Menu.push(new MenuItem('Beef Enchiladas', 'Big filled tortilla wrapped up and filled with tasty beef and topped with tomato sauce', 'Main', 14.99, EnchiladasImage));
Menu.push(new MenuItem('Veggie Quesadillas', 'Crispy baked tortilla wrap filled with veggies and lots of cheese', 'Main', 12.99, QuesadillaImage));
Menu.push(new MenuItem('Churros', 'A plate of tasty mexican donuts coated in cinnamon sugar', 'Dessert', 6.99, ChurrosImage));
