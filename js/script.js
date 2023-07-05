let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

var header = document.getElementById('header');
var navBar = document.getElementById('nav-header');
var home = document.getElementById('home');
var about = document.getElementById('about');
var services = document.getElementById('services');
var contact = document.getElementById('contact')
var footer = document.getElementById('footer');
var sidebar = false;

function openSidebar() {
    sidebar = !sidebar;
    if (sidebar) {
        navBar.style.marginLeft = '-10vw';
        navBar.style.animationName = 'showsidebar';
        home.style.filter = 'blur(2px)';
        about.style.filter = 'blur(2px)';
        services.style.filter = 'blur(2px)';
        contact.style.filter = 'blur(2px)';
        footer.style.filter = 'blur(2px)';
    }else {
        navBar.style.marginLeft = '-100vw';
        navBar.style.animationName = 'closesidebar';
        home.style.filter = '';
        about.style.filter = '';
        services.style.filter = '';
        contact.style.filter = '';
        footer.style.filter = '';
    }
    
}
function closeSidebar() {
    if (sidebar) {
        openSidebar();
    }
}

window.addEventListener('resize', function(event) {
    if (window.innerWidth > 768 && sidebar) {
        openSidebar();
    }
})

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".team-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});