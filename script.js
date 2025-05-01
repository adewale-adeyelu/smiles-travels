/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('navbar')
    this.scrollY >= 50 ? header.classList.add('navbar-bg')
                        :header.classList.remove('navbar-bg')
}
window.addEventListener('scroll', scrollHeader);
