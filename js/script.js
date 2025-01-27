// Menu function //

document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.querySelector('.nav a[href="#home"]');
  const homeLinkResponsive = document.querySelector('.nav-responsive a[href="#home"]');
  
  if (homeLink) homeLink.classList.add('active');
  if (homeLinkResponsive) homeLinkResponsive.classList.add('active');
});

const menuLinks = document.querySelectorAll('.nav a');
const menuLink = document.querySelectorAll('.nav-responsive a');
const sections = document.querySelectorAll('section');
const menu = document.querySelector('.nav'); 
const menuResponsive = document.querySelector('.nav-responsive');

function handleMenuClick(event) {
  menuLinks.forEach(link => link.classList.remove('active'));
  menuLink.forEach(link => link.classList.remove('active'));

  event.target.classList.add('active');
}

function activateMenuOnScroll() {
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {
    if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
      const targetId = section.getAttribute('id');

      menuLinks.forEach(link => link.classList.remove('active'));
      menuLink.forEach(link => link.classList.remove('active'));

      const activeLink = document.querySelector(`.nav a[href="#${targetId}"]`);
      const activeLinkResponsive = document.querySelector(`.nav-responsive a[href="#${targetId}"]`);

      if (activeLink) activeLink.classList.add('active');
      if (activeLinkResponsive) activeLinkResponsive.classList.add('active');
    }
  });

  if (window.scrollY > 50) {
    menu.classList.add('fixed');
    menuResponsive.classList.add('fixed');
  } else {
    menu.classList.remove('fixed');
    menuResponsive.classList.remove('fixed');
  }
}

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    handleMenuClick(event);
  });
});

menuLink.forEach(link => {
  link.addEventListener('click', (event) => {
    handleMenuClick(event);
  });
});

window.addEventListener('scroll', activateMenuOnScroll);

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(event.target.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
    event.preventDefault();
  });
});

menuLink.forEach(link => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(event.target.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
    event.preventDefault();
  });
});

// /Menu function //

// Menu Mobile // 

const menuMobile = document.querySelector('.menu-mobile');
menuMobile.addEventListener('click', ()=> {
    toggleMenu();
});

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive');
    menuMobile.classList.toggle('change');

    if(menuMobile.classList.contains('change')){
        nav.style.display = 'block'

    } else{
        nav.style.display = 'none'
    }

}

// /Menu Mobile //

// Read More / Read Less //

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function (e) {
      e.preventDefault(); 

      const description = this.closest('.services-box').querySelector('.description');
      const isExpanded = description.classList.contains('expanded');

      if (isExpanded) {
          description.classList.remove('expanded');
          this.textContent = 'Read More';
      } else {
          description.classList.add('expanded');
          this.textContent = 'Read Less';
      }
  });
});

// /Read More / Read Less //
