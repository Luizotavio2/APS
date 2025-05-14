document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        
        document.querySelectorAll('.accordion__item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active');
                item.querySelector('.accordion__content').style.maxHeight = null;
            }
        });

        accordionItem.classList.toggle('active');
        const content = button.nextElementSibling;
        
        if (accordionItem.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
