document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.burger').addEventListener('click', (e) => {
        document.querySelector('.burger').classList.add('open');
        document.querySelector('.burger_menu').classList.add('full');
        document.querySelector('body').classList.add('overflow');
        
    });
    document.querySelector('.burger_menu img').addEventListener('click', (e) => {
        document.querySelector('.burger').classList.remove('open');
        document.querySelector('.burger_menu').classList.remove('full');
        document.querySelector('body').classList.remove('overflow');
    })
});