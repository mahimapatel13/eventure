 // Initialize Swiper carousel
 const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10, // Space between slides
    centeredSlides: true, // Center the active slide
    loop: true, // Infinite loop
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});