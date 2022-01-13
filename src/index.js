import pageLoad from "./pageLoad";
import loadHomePage from "./home";
import loadMenuPage from "./menu";
import loadContactPage from "./contact"

function removeChildren(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

pageLoad();

let menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click',()=>{
    removeChildren(document.querySelector('#hero'));
    loadMenuPage();
});

let homeBtn = document.getElementById('home');
homeBtn.addEventListener('click',()=>{
    removeChildren(document.querySelector('#hero'));
    loadHomePage();
});

let contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click',()=>{
    removeChildren(document.querySelector('#hero'));
    loadContactPage();
});