/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('header-bg')
                        :header.classList.remove('header-bg')
}
window.addEventListener('scroll', scrollHeader);
