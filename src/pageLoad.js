import loadHomePage from "./home";

function pageLoad(){
    let content = document.getElementById('content');
    let header = document.createElement('header');
    let nav = document.createElement('nav');
    let logo = document.createElement('h1');
    logo.innerText='LOGO'
    nav.id = "navbar";
    let tabs = document.createElement('ul');
    tabs.id = 'tabs';
    tabs.innerHTML = `
    <li id=home>Home</li>
    <li id=menu>Menu</li>
    <li id=contact>Contact</li>
    `
    header.appendChild(nav);
    nav.appendChild(logo);
    nav.appendChild(tabs);
    content.appendChild(header);

    let description = document.createElement('div');
    description.id = 'hero';
    content.appendChild(description);
    loadHomePage();
}

export default pageLoad;