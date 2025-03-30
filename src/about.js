import { Element } from "./helpers/helpers";

const address = ['123 Fake Street','MadeUp Town','The Country'];

function DisplayAddress() {
    let addressContainer = Element('div', ['addressContainer', 'boxBorder'],'','Address:');

    address.forEach(addressLine => {
        addressContainer.appendChild(Element('div', ['addressLine'],'',addressLine));
    })

    return addressContainer;
}

export function DisplayAbout() {
    let aboutContainer = Element('div', ['aboutContainer']);
    aboutContainer.appendChild(DisplayAddress());

    return aboutContainer;
}