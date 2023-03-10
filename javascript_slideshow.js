// let slideIndex = 0;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }

let slideIndex = [1, 1];
let slideId = ["mySlides", "mySlides2", "mySlides3", "mySlides4", "mySlides5"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}

// const slideshows = document.querySelectorAll('.slideshow');

// slideshows.forEach(slideshow => {
//     const slide = slideshow.querySelector('.slide');
//     const images = slide.querySelectorAll('img');
//     const prevButton = slideshow.querySelector('.prev');
//     const nextButton = slideshow.querySelector('.next');
//     let currentSlide = 0;

//     images[currentSlide].classList.add('active');

//     function showSlide(n) {
//         images[currentSlide].classList.remove('active');
//         currentSlide = (n + images.length) % images.length;
//         images[currentSlide].classList.add('active');
//     }

//     prevButton.addEventListener('click', () => {
//         showSlide(currentSlide - 1);
//     });

//     nextButton.addEventListener('click', () => {
//         showSlide(currentSlide + 1);
//     });
// });

// var slideshow1 = document.getElementById("slideshow1");
// slideshow1.currentSlideIndex = 1;
// showSlides(slideshow1.currentSlideIndex, slideshow1);

// var slideshow2 = document.getElementById("slideshow2");
// slideshow2.currentSlideIndex = 1;
// showSlides(slideshow2.currentSlideIndex, slideshow2);

// var slideshow3 = document.getElementById("slideshow3");
// slideshow3.currentSlideIndex = 1;
// showSlides(slideshow3.currentSlideIndex, slideshow3);

// var slideshow4 = document.getElementById("slideshow4");
// slideshow4.currentSlideIndex = 1;
// showSlides(slideshow4.currentSlideIndex, slideshow4);

// var slideshow5 = document.getElementById("slideshow5");
// slideshow5.currentSlideIndex = 1;
// showSlides(slideshow5.currentSlideIndex, slideshow5);

// function plusSlides(n, slideshow) {
//     showSlides(slideshow.currentSlideIndex += n, slideshow);
// }

// function currentSlide(n, slideshow) {
//     showSlides(slideshow.currentSlideIndex = n, slideshow);
// }

// function showSlides(n, slideshow) {
//     var i;
//     var slides = slideshow.getElementsByClassName("mySlides");
//     var dots = slideshow.getElementsByClassName("dot");
//     if (n > slides.length) { slideshow.currentSlideIndex = 1 }
//     if (n < 1) { slideshow.currentSlideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideshow.currentSlideIndex - 1].style.display = "block";
//     dots[slideshow.currentSlideIndex - 1].className += " active";
// }