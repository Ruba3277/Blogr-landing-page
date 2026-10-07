const menuBtn=document.querySelector(".open-menu");
const closeBtn=document.querySelector(".close-menu");
const mobileMenu=document.querySelector(".mobile-nav");

const navItems=document.querySelectorAll(".nav-item");


//mobile menu open/close

function setOpen(isOpen) {
    menuBtn.classList.toggle('active', isOpen);
    closeBtn.classList.toggle('active', isOpen);
    mobileMenu.classList.toggle('active', isOpen);
}
menuBtn.addEventListener("click",()=>{
    setOpen(true);
});

closeBtn.addEventListener("click",()=>{
    setOpen(false);
});

navItems.forEach(navItem => {
    const navLink = navItem.querySelector(".nav-link");

    const darkArrow=navLink.querySelector(".dark-arrow");
    const lightArrow=navLink.querySelector(".light-arrow");



    const dropdown = navItem.querySelector(".dropdown");

    navLink.addEventListener("click",()=>{
        // Close all other dropdowns
        navItems.forEach((item) => {
            if (item !== navItem) {
                item.querySelector(".dropdown")?.classList.remove("active");
                item.querySelector(".dark-arrow")?.classList.remove("active");
                item.querySelector(".light-arrow")?.classList.remove("active");
            }
        });    
        // Toggle the clicked dropdown    
        darkArrow?.classList.toggle('active');
        lightArrow?.classList.toggle('active');
        dropdown?.classList.toggle('active');

    });
    
});



// Close mobile-menu when switching to desktop 

const desktopMedia = window.matchMedia("(min-width: 48rem)");


desktopMedia.addEventListener("change", (event) => {
  if (event.matches) {
    setOpen(false);
  }
});