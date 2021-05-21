const animItems = document.querySelectorAll('._anim-items') // посик тех элементов, которым необходима анимация

if(animItems.length > 0) {  // Проверка на наличие
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index]; // Здесь оказывается каждый из элементов массива
            const animItemHeight = animItem.offsetHeight; // Высота объекта
            const animItemOffset = offset(animItem).top;  // Позиция объекта относительно верха
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if(animItemHeight > window.innerHeight){ // Если высота объекта выше окна браузера
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) { // Добавление класса при определенных условиях
                animItem.classList.add('_active');
            } else {
                if(!animItem.classList.contains('_anim-no-hide')) { // Повторной анимации нет
                    animItem.classList.remove('_active');
                }    
            }
        }
    } 
    function offset(el) { // Фун-я для нахождения позиции относительно L и T
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    setTimeout(() => {
        animOnScroll();
    }, 300)
    
}











