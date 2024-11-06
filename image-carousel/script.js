let images = document.querySelectorAll('img');
currentIndex = 0;
images[currentIndex].style.display = 'block';

let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

prevBtn.addEventListener("click",(e) => loadImage(-1))
nextBtn.addEventListener("click",(e) => loadImage(+1))

function loadImage(index){
    images[currentIndex].style.display = 'none'
    if((currentIndex + index) >= images.length){
        currentIndex = 0;
    } else if((currentIndex + index) <0){
        currentIndex = images.length-1
    } else{
        currentIndex = currentIndex + index;
    }
    images[currentIndex].style.display = 'block';
}