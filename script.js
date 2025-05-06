/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('header-bg')
                        :header.classList.remove('header-bg')
}
window.addEventListener('scroll', scrollHeader);

/*=============== CHANGE Text HEADER ===============*/
const TextHeader = () => {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
      if (window.scrollY >= 50) {
        link.style.color = '#0f2355';
      } else {
        link.style.color = 'white';
      }
    });
};
window.addEventListener('scroll', TextHeader);

/*=============== CHANGE Contact HEADER ===============*/
const contactBtn = document.getElementById('contact-link');
const contactText = contactBtn.querySelector('a');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 50) {
    contactBtn.classList.remove('bg-btn-color', 'hover:bg-orange-500');
    contactBtn.classList.add('border', 'border-[#0f2355]');
    contactText.classList.remove('text-white');
    contactText.classList.add('text-[#0f2355]');
  } else {
    contactBtn.classList.add('bg-btn-color', 'hover:bg-orange-500');
    contactBtn.classList.remove('border', 'border-[#0f2355]');
    contactText.classList.add('text-white');
    contactText.classList.remove('text-[#0f2355]');
  }
});

/*======================= SrollBar ============================*/
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show the button when scrolled down 200px
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
};
  
  // When the button is clicked, scroll to the top
//   scrollTopBtn.onclick = function () {
//     window.scrollTo({ behavior: 'smooth' });
// };