const flipcard = document.querySelector('.flip-card-inner')

flipcard.addEventListener('click', function(){
    console.log("click")
    flipcard.classList.toggle('is-flipped')
})