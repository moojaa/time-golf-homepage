
const textAni = document.querySelector(".text-ani")
const textAniSub = document.querySelector(".text-ani-sub")
const textAni2 = document.querySelector(".text-ani-2")
const textAniSub2 = document.querySelector(".text-ani-sub-2")
const textAni3 = document.querySelector(".text-ani-3")
const textAniSub3 = document.querySelector(".text-ani-sub-3")
const textAni4 = document.querySelector(".text-ani-4")
const textAniSub4 = document.querySelector(".text-ani-sub-4")
const textAni5 = document.querySelector(".text-ani-5")
const textAniSub5 = document.querySelector(".text-ani-sub-5")

const scrollAnime = (textName,duration,scrollStart,scrollEnd,scroll)=>{
    if(scroll >= scrollStart && scroll <= scrollEnd){
        textName.style.animation = `fadeIn ${duration}s ease-out forwards`
    } else {
        textName.style.animation = `fadeOut ${duration}s ease-out forwards`
    }
}

window.addEventListener('scroll',()=>{
    let scroll = window.scrollY
    scrollAnime(textAni,1,0,100,scroll);
    scrollAnime(textAniSub,2,0,100,scroll);
    scrollAnime(textAni2,1,500,900,scroll);
    scrollAnime(textAniSub2,2,500,900,scroll);
    scrollAnime(textAni3,1,1300,2000,scroll);
    scrollAnime(textAniSub3,2,1300 ,2000,scroll);
    scrollAnime(textAni4,1,1740,2500,scroll);
    scrollAnime(textAniSub4,2,1740 ,2500,scroll);
    scrollAnime(textAni5,1,2000,2800,scroll);
    scrollAnime(textAniSub5,2,2000 ,2800,scroll);
})


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
