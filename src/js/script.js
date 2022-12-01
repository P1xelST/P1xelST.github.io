window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          closeElem = document.querySelector('.menu__close');

    function openCloseMenu(item) {
        item.addEventListener('click', function() {
            menu.classList.toggle('active');
            item.classList.toggle('hamburger_active');
        }); 
    }
    closeElem.addEventListener('click', () => {
        closeElem.classList.remove('hamburger_active'); 
        hamburger.classList.remove('hamburger_active');
    });
    document.addEventListener('keydown', function(e) {
        if (e.code == 'Escape') {
            menu.classList.remove('active');
            hamburger.classList.remove('hamburger_active');
        }
    })
    openCloseMenu(hamburger);
    openCloseMenu(closeElem);
})
